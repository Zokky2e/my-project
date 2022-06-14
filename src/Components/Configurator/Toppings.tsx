import ToppingsItem from './ToppingsItem';
import styles from './Toppings.module.css';
import { useEffect, useState } from 'react';
function Toppings() {
  const [totalPrice, setTotalPrice] = useState('');
  useEffect(() => {
    setTotalPrice('');
  });
  return (
    <div className={styles.container}>
      <h1>Toppings! Toppings!</h1>
      <ul className={styles.toppings}>
        <li>
          <ToppingsItem item="🌶" name="Chilli" />
        </li>
        <li>
          <ToppingsItem item="🌽" name="Corn" />
        </li>
        <li>
          <ToppingsItem item="🥚" name="Egg" />
        </li>
        <li>
          <ToppingsItem item="🍍" name="Pineapple" />
        </li>
        <li>
          <ToppingsItem item="🍢" name="Meat" />
        </li>
        <li>
          <ToppingsItem item="🍄" name="Shrooms" />
        </li>
        <li>
          <ToppingsItem item="🥓" name="Bacon" />
        </li>
      </ul>
      <div>{totalPrice}</div>
    </div>
  );
}

export default Toppings;
