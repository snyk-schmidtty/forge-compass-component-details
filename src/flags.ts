import LaunchDarkly from 'launchdarkly-node-server-sdk';

// initializing the client is expensive so reuse once initialized
let client: LaunchDarkly.LDClient;

const getFlagState = async (): Promise<string> => {
  const SDK_KEY = process.env.LD_SDK_KEY ?? '';
  if (SDK_KEY === '') {
    console.warn('sdk key not set. no call will be made');
    return '';
  }
  if (!client) {
    client = LaunchDarkly.init(SDK_KEY);
    await client.waitForInitialization();
  }

  try {
    const response = await client.variation('user-home-page_npc2i', { key: 'mdellandrea@atlassian.com' }, false);
    return JSON.stringify(response);
  } catch (err) {
    console.error({
      message: 'Error received',
      err,
    });
    return '';
  }
};

export { getFlagState }
