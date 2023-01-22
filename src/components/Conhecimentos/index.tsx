import React, { useState } from 'react';
import styled from 'styled-components';
import useHabilidadesServices from '../../hooks/cache/useHabilidadesServices';
import { Habilidades } from '../../types/ServicesProps';
import './index.scss';

const ListaHabilidade = styled.li`
  &:hover {
    border-right: 5px solid ${(props) => props.color};
  }
`;

const ItemHabilidade = styled.span`
  background-color: ${(props) => props.color};
`;

interface ConhecimentosProps {
  conhecimentos: Habilidades[];
}

export default function ConhecimentosComponent({ conhecimentos }: ConhecimentosProps) {
  return (
    <section className='conhecimentos secao' id='conhecimentos' data-height>
      <h1 className='titulo-secao'>Conhecimentos</h1>

      <div className='conteudo-conhecimentos'>
        <div className='tags-conhecimentos'>
          <p className='instrucoes'>Toque na tecnologia</p>
          {conhecimentos.length > 0 &&
            conhecimentos.map((habilidade) => {
              return (
                <ListaHabilidade
                  data-tag='ativo'
                  data-btn-conteudo={habilidade.titulo.toLowerCase()}
                  color={habilidade.cores}
                >
                  <div className='header-tag'>
                    <ItemHabilidade className='icon-tag' color={habilidade.cores}>
                      <i className={habilidade.icones}></i>
                    </ItemHabilidade>
                    {habilidade.titulo}
                  </div>
                  <div className='conteudo-conhecimento-mobile'>
                    <p className='descricao-tag'>{habilidade.descricao}</p>
                    <p className='experiencia-tag'>{habilidade.experiencia} anos de experiência</p>
                  </div>
                </ListaHabilidade>
              );
            })}
        </div>

        <div className='conteudo-tags'></div>
      </div>
    </section>
  );
}
