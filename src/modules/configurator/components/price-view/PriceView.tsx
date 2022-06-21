import { MyPizzaContext } from 'modules/configurator/context/Pizza';
import { useContext, useEffect, useState } from 'react';
import styles from './PriceView.module.css';
function PriceView() {
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
    <div className={styles.container}>
      <div className={styles.pizza}>
        <img src={require('./assets/pizza.png')} alt="pizza" />
      </div>
      <div className={styles.quantity}>
        <div className={styles.section}>
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <p>QTY</p>
        </div>
        <div className={styles.section}>
          <p className={styles.price}>{`$${totalPrice}`}</p>
          <p>Order total</p>
        </div>
      </div>
      <div>
        <button>Buy Pizza! Pizza!</button>
      </div>
    </div>
  );
}

export default PriceView;
