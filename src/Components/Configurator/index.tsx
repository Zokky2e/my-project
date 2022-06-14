import Discount from './Discount';
import PriceView from './PriceView';
import Sizer from './Sizer';
import Toppings from './Toppings';

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
