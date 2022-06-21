import styles from './Navigation.module.css';

function Navigation() {
  return (
    <div className={styles.header}>
      <ul className={styles.container}>
        <li className={styles.title}>Pizz-á-tron</li>
        <li className={styles.logo}>🍕</li>
        <li className={styles.button}>
          <button>Log out</button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
