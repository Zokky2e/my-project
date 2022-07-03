/** @jsxImportSource @emotion/react */

import { container, item } from './ToppingsItem.styles';

function ToppingsItem(props: {
  item: string;
  name: string;
  price: number;
  selected: boolean;
  setSelected: (params: boolean) => void;
}) {
  return (
    <div
      css={container}
      style={{ backgroundColor: props.selected ? '#e5c3f5' : 'white' }}
      onClick={() => {
        props.setSelected(!props.selected);
      }}
    >
      <div
        css={item}
        style={{ backgroundColor: props.selected ? '#ffffff60' : 'white' }}
      >
        {props.item}
      </div>
      <div>{props.name}</div>
    </div>
  );
}

export default ToppingsItem;
