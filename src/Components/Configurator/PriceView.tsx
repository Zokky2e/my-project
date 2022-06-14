import { useEffect, useState } from 'react';
import styles from './PriceView.module.css';
function PriceView() {
  const [totalPrice, setTotalPrice] = useState('');
  useEffect(() => {
    setTotalPrice('$0');
  });
  return (
    <div className={styles.container}>
      <div className={styles.pizza}>
        <img src={require('./assets/pizza.png')} alt="pizza" />
      </div>
      <div className={styles.quantity}>
        <div className={styles.section}>
          <input defaultValue={1} />
          <p>QTY</p>
        </div>
        <div className={styles.section}>
          <p className={styles.price}>{totalPrice}</p>
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
