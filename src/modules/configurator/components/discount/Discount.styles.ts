import { css } from '@emotion/react';

export const container = css`
  width: 40%;
  margin: 40px auto 40px;
  display: flex;
  justify-content: space-between;
  flex-flow: nowrap column;
  align-items: center;
`;

export const entry = css`
  width: 360px;
  height: 68px;
  padding: 4px;
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  background-color: #ececf3;
  border-radius: 72px;
  button {
    background-color: white;
    padding: 20px 40px;
    border-radius: 36px;
    border: none;
    cursor: pointer;
  }
  button:disabled {
    background-color: transparent;
    padding: 20px 40px;
    border-radius: 36px;
    border: 1px solid #dbdbdb;
    cursor: unset;
  }
  input {
    width: 100%;
    margin-left: 25px;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;
