import ForgeUI, {
  render,
  Fragment,
  Text,
  useProductContext,
} from '@forge/ui';

const App = () => {
  const context = useProductContext();

  return (
    <Fragment>
      <Text>
        This is an awesome team with ID {context.extensionContext.teamId}
      </Text>
    </Fragment>
  );
};

export const run = render(
  <App/>
);
