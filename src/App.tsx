import PizzaProvider from 'modules/configurator/context/Pizza';

import { Route, Routes } from 'react-router-dom';
import { Navigation, Configurator, Predavanje6 } from './modules/index';
function App() {
  return (
    <PizzaProvider>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Configurator />
            </>
          }
        />
        <Route
          path="/pred-6"
          element={
            <>
              <Navigation />
              <Predavanje6 />
            </>
          }
        />
      </Routes>
    </PizzaProvider>
  );
}

export default App;
