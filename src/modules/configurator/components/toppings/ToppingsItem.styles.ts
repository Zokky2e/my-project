import { css } from '@emotion/react';

export const container = css`
  height: 100px;
  width: 70px;
  padding: 20px 12px;
  border-radius: 56px;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.03);
  background-color: #ffffff;
  text-align: center;
  user-select: none;
  cursor: pointer;
  :hover {
    background-color: #e5c3f5 !important;
  }
  :hover > .item {
    background-color: #ffffff60 !important;
  }
`;

export const item = css`
  width: 40px;
  height: 40px;
  padding: 4px;
  margin: 0 auto 16px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background: transparant;
  box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.03);
  border-radius: 40px;
`;
