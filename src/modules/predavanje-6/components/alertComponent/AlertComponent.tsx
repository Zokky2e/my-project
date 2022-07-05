/** @jsxImportSource @emotion/react */

import { useEffect } from 'react';
import { container } from '../../styles/predavanje6.styles';
export function AlertComponent() {
  useEffect(() => {
    alert('I AM MOUNTED');
  }, []);
  return <div css={container}>Alert</div>;
}
