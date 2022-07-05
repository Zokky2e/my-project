import { useEffect, useState } from 'react';

export function useCalculate(
  size: number,
  toppings: number,
  discount: number,
  quantity: string,
) {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const qty = quantity === '' ? 1 : parseInt(quantity);

    setTotalPrice(discount * (qty * (size + toppings)));
  }, [size, toppings, discount, quantity]);
  return totalPrice.toFixed(2);
}
