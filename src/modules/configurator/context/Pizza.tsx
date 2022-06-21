/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';

export type PizzaContext = {
  sizePrice: number;
  toppingsPrice: number;
  discount: number;
  changeSizePrice: (size: string) => void;
  changeToppingsPrice: (price: number) => void;
  changeDiscount: (discount: number) => void;
};
export const MyPizzaContext = createContext<PizzaContext>({
  sizePrice: 0,
  toppingsPrice: 0,
  discount: 1,
  changeSizePrice: () => {},
  changeToppingsPrice: () => {},
  changeDiscount: () => {},
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PizzaProvider(props: { children: any }) {
  const [sizePrice, setSizePrice] = useState(0);
  const [toppingsPrice, setToppingsPrice] = useState(0);
  const [discount, setDiscount] = useState(1);

  function changeSizePriceHandler(size: string) {
    if (size === 's') setSizePrice(6);
    else if (size === 'm') setSizePrice(10);
    else {
      setSizePrice(12);
    }
  }

  function changeToppingsPriceHandler(price: number) {
    setToppingsPrice(price);
  }
  function changeDiscountHandler(discount: number) {
    setDiscount(discount);
  }
  const context = {
    sizePrice: sizePrice,
    toppingsPrice: toppingsPrice,
    discount: discount,
    changeSizePrice: changeSizePriceHandler,
    changeToppingsPrice: changeToppingsPriceHandler,
    changeDiscount: changeDiscountHandler,
  };

  return (
    <MyPizzaContext.Provider value={context}>
      {props.children}
    </MyPizzaContext.Provider>
  );
}
export default PizzaProvider;
