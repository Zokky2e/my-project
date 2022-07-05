/** @jsxImportSource @emotion/react */
import { useLocation, useNavigate } from 'react-router-dom';
import { header, container, title, logo, button } from './Navigation.styles';

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div css={header}>
      <ul css={container}>
        <li css={title}>Pizz-á-tron</li>
        <li css={logo}>🍕</li>
        <li>
          <button
            css={button}
            onClick={() => {
              if (location.pathname === '/') {
                navigate('/pred-6', { replace: true });
              } else {
                navigate('/', { replace: true });
              }
            }}
          >
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
}
