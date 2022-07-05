import { css } from '@emotion/react';

export const container = css`
  width: 40%;
  margin: 40px auto 40px;

  display: flex;
  justify-content: space-between;
  flex-flow: nowrap column;
  align-items: center;
`;

export const toppings = css`
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: nowrap row;
  list-style-type: none;
  @media (max-width: 1300px) {
    justify-content: center;
    flex-flow: wrap row;
  }
`;

export const totalPriceCss = css`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  :empty {
    height: 1.2rem;
  }
`;
