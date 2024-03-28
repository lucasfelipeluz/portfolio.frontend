import React from 'react';
import { NavItens } from '../style/Header';
import LanguageProps from '../interfaces/LanguageProps';
import strings from '../utils/strings';
import { NavItensProps } from '../types/Components';

interface Props {
  data: NavItensProps[];
}

export default function NavItensComponent({ data }: Props) {
  return (
    <NavItens>
      {data.map((item) => {
        return (
          <li className={`nav-item ${item.classNames}`}>
            <a href={`#${item.classNames}`}>{item.name}</a>
          </li>
        );
      })}
    </NavItens>
  );
}
