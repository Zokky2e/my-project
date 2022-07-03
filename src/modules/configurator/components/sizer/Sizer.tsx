/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */

import { MyPizzaContext } from 'modules/configurator/context/Pizza';
import { useContext, useEffect, useState } from 'react';
import { container, buttons } from './Sizer.styles';

function Sizer() {
  const pizza = useContext(MyPizzaContext);
  const [selected, setSelected] = useState('l');
  const [activeL, setActiveL] = useState(true);
  const [activeM, setActiveM] = useState(false);
  const [activeS, setActiveS] = useState(false);
  function selectHandler(button: any) {
    setSelected(button.target.id);
  }
  useEffect(() => {
    switch (selected) {
      case 's':
        setActiveS(true);
        setActiveM(false);
        setActiveL(false);
        pizza.changeSizePrice('s');
        break;
      case 'm':
        setActiveS(false);
        setActiveM(true);
        setActiveL(false);
        pizza.changeSizePrice('m');
        break;
      default:
        setActiveS(false);
        setActiveM(false);
        setActiveL(true);
        pizza.changeSizePrice('l');
        break;
    }
  }, [selected]);
  return (
    <div css={container}>
      <h1>Pizza! Pizza! size</h1>
      <div css={buttons}>
        <button
          id="s"
          style={{
            backgroundColor: activeS ? 'white' : '',
            color: activeS ? '#383838' : '',
          }}
          onClick={selectHandler}
        >
          S
        </button>
        <button
          id="m"
          style={{
            backgroundColor: activeM ? 'white' : '',
            color: activeM ? '#383838' : '',
          }}
          onClick={selectHandler}
        >
          M
        </button>
        <button
          id="l"
          style={{
            backgroundColor: activeL ? 'white' : '',
            color: activeL ? '#383838' : '',
          }}
          onClick={selectHandler}
        >
          L
        </button>
      </div>
    </div>
  );
}

export default Sizer;
