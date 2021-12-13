import { render, Fragment, Text, useProductContext } from '@forge/ui';

const App = () => {
  const context = useProductContext();

  const teamId = JSON.parse(context.extensionContext).teamId;

  return (
      <Fragment>
        <Text>
          This is an awesome team with ID {teamId}
        </Text>
      </Fragment>
  );
};

export const run = render(
  <App/>
);
