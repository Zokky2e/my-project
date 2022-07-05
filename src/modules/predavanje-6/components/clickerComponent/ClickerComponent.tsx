/** @jsxImportSource @emotion/react */

import { useEffect, useRef, useState } from 'react';
import { container, button } from '../../styles/predavanje6.styles';

export function ClickerComponent() {
  const [count, setCount] = useState(0);
  const lastCount = useRef(count);

  useEffect(() => {
    lastCount.current = count;
  }, [count]);

  useEffect(() => {
    return () => {
      console.log('Clicked ' + lastCount.current + ' times');
    };
  }, []);
  return (
    <div css={container}>
      <button
        css={button}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me!
      </button>
    </div>
  );
}
