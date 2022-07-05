/** @jsxImportSource @emotion/react */
import { MyPizzaContext } from 'modules/configurator/context/Pizza';
import { useContext, useEffect, useState } from 'react';
import {
  container,
  pizzaCss,
  quantityCss,
  section,
  price,
} from './PriceView.styles';
export function PriceView() {
  const pizza = useContext(MyPizzaContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState('1');
  useEffect(() => {
    const qty = quantity === '' ? 1 : parseInt(quantity);

    setTotalPrice(
      pizza.discount * (qty * (pizza.sizePrice + pizza.toppingsPrice)),
    );
  }, [quantity, pizza]);
  return (
    <div css={container}>
      <div css={pizzaCss}>
        <img src={require('../../assets/pizza.png')} alt="pizza" />
      </div>
      <div css={quantityCss}>
        <div css={section}>
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
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
