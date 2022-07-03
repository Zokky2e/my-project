import { css } from '@emotion/react';

export const container = css`
  width: 40%;
  margin: 40px auto 40px;
  display: flex;
  justify-content: space-between;
  flex-flow: nowrap column;
  align-items: center;
`;

export const buttons = css`
  width: 360px;
  height: 68px;
  padding: 0 10px;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;

  background-color: #ececf3;
  border-radius: 72px;
  button {
    height: 48px;
    border: none;
    cursor: pointer;
    color: #8c8c8c;
    background-color: transparent;
    border-radius: 36px;
  }
`;
