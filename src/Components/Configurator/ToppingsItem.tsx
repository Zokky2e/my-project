import { useState } from 'react';
import styles from './ToppingsItem.module.css';

function ToppingsItem(props: { item: string; name: string }) {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: selected ? '#e5c3f5' : 'white' }}
      onClick={() => {
        setSelected(!selected);
        console.log(selected);
      }}
    >
      <div
        className={styles.item}
        style={{ backgroundColor: selected ? '#ffffff60' : 'white' }}
      >
        {props.item}
      </div>
      <div>{props.name}</div>
    </div>
  );
}

export default ToppingsItem;
