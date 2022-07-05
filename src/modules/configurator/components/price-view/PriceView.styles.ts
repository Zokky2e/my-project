import { css } from '@emotion/react';

export const container = css`
  width: 40%;
  margin: 80px auto 0px;
  display: grid;
  grid-template-columns: 25% 45% auto;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #f2f2f2;
  border-radius: 28px 28px 0px 0px;
  input {
    width: 40px;
    height: 30px;
    background: #ececf3;
    border-radius: 20px;
    border: none;
    text-align: center;
    outline: none;
  }
  p {
    font-size: 0.7rem;

    text-transform: uppercase;
  }
  button {
    padding: 20px 24px;
    border-radius: 36px;
    color: #ffffff;
    border: none;
    background-color: #b95de4;
    cursor: pointer;
    font-size: 1rem;
    margin-right: 20px;
  }
`;

export const pizzaCss = css`
  margin-left: 40px;
  position: relative;
  top: -20px;
  transform: scaleX(-1);
  img {
    width: 180px;
  }
`;
export const quantityCss = css`
  display: grid;
  align-items: center;
  grid-template-columns: 50% 50%;
  flex-flow: nowrap row;
`;
export const section = css`
  display: block;

  text-align: center;
  gap: 0px;
  p {
    width: fit-content;
    color: #8c8c8c;
    font-size: 1rem;
    margin: auto;
  }
  :first-of-type {
    border-right: 1px dashed #dbdbdb;
  }
`;
export const price = css`
  color: #b95de4 !important;
  margin: 0px;
  font-weight: bold;
  font-size: 2rem !important;
`;
