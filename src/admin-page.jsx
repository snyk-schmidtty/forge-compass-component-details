import ForgeUI, {
  Button,
  Code,
  Fragment,
  render,
  Text,
  useState,
} from '@forge/ui';
import { BUILD_EVENTS } from './constants';
import { getFlagState } from './flags';

const App = () => {
  const [flagState, setFlagState] = useState(false);
  const callback = async () => {
    const updatedState = await getFlagState(BUILD_EVENTS);
    setFlagState(updatedState);
  };

  return (
    <Fragment>
      <Text>Hello world - admin page</Text>
      <Button
        text="Get Flag State"
        onClick={callback}
      />
      <Text><Code text={`${BUILD_EVENTS}`} />{` flag state: ${flagState}`}</Text>
    </Fragment>
  );
};

export const run = render(
  <App/>
);
