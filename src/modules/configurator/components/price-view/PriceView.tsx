/** @jsxImportSource @emotion/react */
import { MyPizzaContext } from 'modules/configurator/context/Pizza';
import { useCalculate } from 'modules/configurator/hooks/useCalculate';
import { useContext, useState } from 'react';
import {
  container,
  pizzaCss,
  quantityCss,
  section,
  price,
} from './PriceView.styles';
export function PriceView() {
  const pizza = useContext(MyPizzaContext);
  const [quantity, setQuantity] = useState('1');
  const totalPrice = useCalculate(
    pizza.sizePrice,
    pizza.toppingsPrice,
    pizza.discount,
    quantity,
  );
  return (
    <div css={container}>
      <div css={pizzaCss}>
        <img src={require('../../assets/pizza.png')} alt="pizza" />
      </div>
      <div css={quantityCss}>
        <div css={section}>
          <input
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
          <p>QTY</p>
        </div>
        <div css={section}>
          <p css={price}>{`$${totalPrice}`}</p>
          <p>Order total</p>
        </div>
      </div>
      <div>
        <button>Buy Pizza! Pizza!</button>
      </div>
    </div>
  );
}
