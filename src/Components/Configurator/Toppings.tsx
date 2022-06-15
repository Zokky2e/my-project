import ToppingsItem from './ToppingsItem';
import styles from './Toppings.module.css';
import { useContext, useEffect, useState } from 'react';
import { MyPizzaContext } from 'Components/Context/Pizza';
function Toppings() {
  const pizza = useContext(MyPizzaContext);
  const [totalPrice, setTotalPrice] = useState('0');
  const [selectedChilli, setSelectedChilli] = useState(false);
  const [selectedCorn, setSelectedCorn] = useState(false);
  const [selectedEgg, setSelectedEgg] = useState(false);
  const [selectedPineapple, setSelectedPineapple] = useState(false);
  const [selectedMeat, setSelectedMeat] = useState(false);
  const [selectedShrooms, setSelectedShrooms] = useState(false);
  const [selectedBacon, setSelectedBacon] = useState(false);

  useEffect(() => {
    let counter = 0;
    if (selectedChilli) counter++;
    if (selectedCorn) counter++;
    if (selectedEgg) counter++;
    if (selectedPineapple) counter++;
    if (selectedMeat) counter++;
    if (selectedShrooms) counter++;
    if (selectedBacon) counter++;
    if (counter > 0) {
      setTotalPrice(`Total price +${counter / 4}`);
      pizza.changeToppingsPrice(counter / 4);
    } else {
      setTotalPrice(``);
      pizza.changeToppingsPrice(0);
    }
  }, [
    selectedChilli,
    selectedCorn,
    selectedEgg,
    selectedPineapple,
    selectedMeat,
    selectedShrooms,
    selectedBacon,
  ]);
  return (
    <div className={styles.container}>
      <h1>Toppings! Toppings!</h1>
      <ul className={styles.toppings}>
        <li>
          <ToppingsItem
            item="🌶"
            name="Chilli"
            price={0.25}
            selected={selectedChilli}
            setSelected={() => {
              setSelectedChilli(!selectedChilli);
            }}
          />
        </li>
        <li>
          <ToppingsItem
            item="🌽"
            name="Corn"
            price={0.25}
            selected={selectedCorn}
            setSelected={() => {
              setSelectedCorn(!selectedCorn);
            }}
          />
        </li>
        <li>
          <ToppingsItem
            item="🥚"
            name="Egg"
            price={0.25}
            selected={selectedEgg}
            setSelected={() => {
              setSelectedEgg(!selectedEgg);
            }}
          />
        </li>
        <li>
          <ToppingsItem
            item="🍍"
            name="Pineapple"
            price={0.25}
            selected={selectedPineapple}
            setSelected={() => {
              setSelectedPineapple(!selectedPineapple);
            }}
          />
        </li>
        <li>
          <ToppingsItem
            item="🍢"
            name="Meat"
            price={0.25}
            selected={selectedMeat}
            setSelected={() => {
              setSelectedMeat(!selectedMeat);
            }}
          />
        </li>
        <li>
          <ToppingsItem
            item="🍄"
            name="Shrooms"
            price={0.25}
            selected={selectedShrooms}
            setSelected={() => {
              setSelectedShrooms(!selectedShrooms);
            }}
          />
        </li>
        <li>
          <ToppingsItem
            item="🥓"
            name="Bacon"
            price={0.25}
            selected={selectedBacon}
            setSelected={() => {
              setSelectedBacon(!selectedBacon);
            }}
          />
        </li>
      </ul>
      <div className={styles.totalPrice}>{totalPrice}</div>
    </div>
  );
}

export default Toppings;
