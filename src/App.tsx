import PizzaProvider from 'modules/configurator/context/Pizza';
import { Navigation, Configurator } from './modules/index';
function App() {
  return (
    <PizzaProvider>
      <Navigation />
      <Configurator />
    </PizzaProvider>
  );
}

export default App;
