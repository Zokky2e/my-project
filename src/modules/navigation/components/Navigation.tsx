/** @jsxImportSource @emotion/react */
import { header, container, title, logo, button } from './Navigation.styles';

export function Navigation() {
  return (
    <div css={header}>
      <ul css={container}>
        <li css={title}>Pizz-á-tron</li>
        <li css={logo}>🍕</li>
        <li>
          <button css={button}>Log out</button>
        </li>
      </ul>
    </div>
  );
}
