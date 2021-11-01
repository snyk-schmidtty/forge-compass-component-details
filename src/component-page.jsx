import ForgeUI, { render, Fragment, Text, Table, Head, Cell, Row, useProductContext, useEffect, useState } from '@forge/ui';
import api from '@atlassian/forge-graphql';

const App = () => {

  const context = useProductContext();
  const [component, setComponent] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(async () => {
    const { errors, data } = await api.compass.asApp().getComponent({
      componentId: JSON.parse(context.extensionContext).componentId,
    });
    setComponent(data.component);
    setErrors(errors);
  }, []);

  if(errors && errors.length !== 0) {
    return(
      <Fragment>
        <Text>The request failed with error(s): { errors.join(", ") } </Text>
      </Fragment>
    )
  } else {
    if (!component) {
      return <Text>Loading...</Text>
    }
    console.log(Object.entries(component))
    return (
    <Table>
      <Head>
        <Cell>
          <Text>Component property</Text>
        </Cell>
        <Cell>
          <Text>Value</Text>
        </Cell>
      </Head>
      {Object.entries(component).map(componentProperties => (
        <Row>
          <Cell>
            <Text>{componentProperties[0]}</Text>
          </Cell>
          <Cell>
            <Text>{JSON.stringify(componentProperties[1])}</Text>
          </Cell>
        </Row>)) }
    </Table>
    );  
  }

};

export const run = render(
  <App/>
);
