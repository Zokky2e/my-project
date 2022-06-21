import Discount from './components/discount/Discount';
import PriceView from './components/price-view/PriceView';
import Sizer from './components/sizer/Sizer';
import Toppings from './components/toppings/Toppings';

function Configurator() {
  return (
    <div>
      <Toppings />
      <Sizer />
      <Discount />
      <PriceView />
    </div>
  );
}

export default Configurator;
