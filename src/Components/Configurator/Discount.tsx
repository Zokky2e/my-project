import { useState } from 'react';
import styles from './Discount.module.css';

function Discount() {
  const [name, setName] = useState('');
  return (
    <div className={styles.container}>
      <h1>Get the discount</h1>
      <div className={styles.entry}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter discount code"
        />
        <button disabled={!name}>Apply</button>
      </div>
    </div>
  );
}

export default Discount;
