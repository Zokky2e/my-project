import Configurator from 'Components/Configurator';
import PizzaProvider from 'Components/Context/Pizza';
import Navigation from 'Components/Navigation/Navigation';

function App() {
  return (
    <PizzaProvider>
      <Navigation />
      <Configurator />
    </PizzaProvider>
  );
}

export default App;
