import ForgeUI, {
  render,
  Fragment,
  Text,
} from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Text>Hello world - admin page</Text>
    </Fragment>
  );
};

export const run = render(
  <App/>
);
