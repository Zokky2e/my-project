import Configurator from 'modules/configurator';
import PizzaProvider from 'modules/configurator/context/Pizza';
import Navigation from 'modules/Navigation/Navigation';

function App() {
  return (
    <PizzaProvider>
      <Navigation />
      <Configurator />
    </PizzaProvider>
  );
}

export default App;
