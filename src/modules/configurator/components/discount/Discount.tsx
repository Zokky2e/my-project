/** @jsxImportSource @emotion/react */
import { MyPizzaContext } from 'modules/configurator/context/Pizza';
import { useContext, useState } from 'react';
import { container, entry } from './Discount.styles';

export function Discount() {
  const pizza = useContext(MyPizzaContext);
  const [discount, setDiscount] = useState('');
  function checkDiscountValue() {
    if (discount === 'discount code') {
      pizza.changeDiscount(0.9);
    }
  }
  return (
    <div css={container}>
      <h1>Get the discount</h1>
      <div css={entry}>
        <input
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          placeholder="Enter discount code"
        />
        <button disabled={!discount} onClick={checkDiscountValue}>
          Apply
        </button>
      </div>
    </div>
  );
}
