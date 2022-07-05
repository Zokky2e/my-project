/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { container, button } from '../../styles/predavanje6.styles';

export function RandomiserComponent() {
  const [randomise, setRandomise] = useState(0);
  useEffect(() => {
    console.log('RANDOM NUMBER -> ' + Math.floor(Math.random() * 100));
  }, [randomise]);
  return (
    <div css={container}>
      <button
        css={button}
        onClick={() => {
          setRandomise(randomise + 1);
        }}
      >
        Click me for random!
      </button>
    </div>
  );
}
