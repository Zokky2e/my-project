/** @jsxImportSource @emotion/react */
import { container } from '../../styles/predavanje6.styles';
import { useMemo } from 'react';

export function MemoizeComponent() {
  function doExpensiveOperation() {
    console.log('Calculating...');
    let num = 0;
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    console.log('FINISHED');
    return num;
  }
  const operation = useMemo(() => doExpensiveOperation(), []);

  return (
    <div css={container}>
      <h2>Expensive Calculation</h2>
      {operation}
    </div>
  );
}
