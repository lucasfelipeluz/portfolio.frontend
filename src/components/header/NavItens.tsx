import React from 'react';

import { NavItens } from 'src/core/theme/Header';
import { NavItensProps } from 'src/types/Components';

interface Props {
  data: NavItensProps[];
}

export default function NavItensComponent({ data }: Props) {
  return (
    <NavItens>
      {data.map((item, index) => (
        <li className={`nav-item ${item.classNames}`} key={index as number}>
          <a href={`#${item.classNames}`}>{item.name}</a>
        </li>
      ))}
    </NavItens>
  );
}
