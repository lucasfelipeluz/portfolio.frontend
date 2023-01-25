import React, { MouseEvent, MouseEventHandler, SyntheticEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Habilidades } from '../../types/ServicesProps';
import './index.scss';

const ListaHabilidade = styled.li`
  background-color: rgb(255, 0, 0);
  &:hover {
    border-color: ${(props) => props.color} !important;
  }
`;

const ItemHabilidade = styled.span`
  background-color: ${(props) => props.color};
`;

const IconeHabilidade = styled.i`
  color: ${(props) => props.color};
  font-size: 80px;
`;

interface ConhecimentosProps {
  conhecimentos: Habilidades[];
}

export default function ConhecimentosComponent({ conhecimentos }: ConhecimentosProps) {
  const [exibirInfoMobile, setExibirInfoMobile] = useState<boolean>(false);
  const [exibirInfo, setExibirInfo] = useState<boolean>(false);
  const [info, setInfo] = useState<Habilidades>();

  const showInfo = (habilidade: Habilidades) => {
    setExibirInfo(true);
    setInfo(habilidade);
  };

  const deleteInfo = () => {
    setExibirInfo(false);
  };

  const openList = (e: any) => {
    if (window.innerWidth < 991) {
      if (e.target.nodeName === 'DIV') {
        e.target.offsetParent.classList.toggle('open');
      }
      if (e.target.nodeName === 'P') {
        e.target.offsetParent.classList.toggle('open');
      }
      e.target.classList.toggle('open');
    }
  };

  return (
    <section className='conhecimentos secao' id='conhecimentos' data-height>
      <h1 className='titulo-secao'>Conhecimentos</h1>

      <div className='conteudo-conhecimentos'>
        <div className='tags-conhecimentos'>
          <p className='instrucoes'>
            {window.innerWidth < 991 ? 'Toque na tecnologia' : 'Passe o mouse por cima'}
          </p>
          {conhecimentos.length > 0 &&
            conhecimentos.map((habilidade) => {
              return (
                <ListaHabilidade
                  className={`lista-habilidade ${exibirInfoMobile ? 'open' : ''}`}
                  data-tag
                  data-btn-conteudo={habilidade.titulo.toLowerCase()}
                  color={habilidade.cores}
                  key={habilidade.id}
                  onClick={(e: any) => openList(e)}
                  onMouseEnter={() => showInfo(habilidade)}
                  onMouseLeave={() => deleteInfo()}
                >
                  <div className='header-tag'>
                    <ItemHabilidade className='icon-tag' color={habilidade.cores}>
                      <i className={habilidade.icones}></i>
                    </ItemHabilidade>
                    {habilidade.titulo}
                  </div>
                  <div className='conteudo-conhecimento-mobile'>
                    <p className='descricao-tag-mobile'>{habilidade.descricao}</p>
                    <p className='experiencia-tag-mobile'>
                      {habilidade.experiencia} anos de experiência
                    </p>
                  </div>
                </ListaHabilidade>
              );
            })}
        </div>

        <div className='conteudo-tags'>
          {exibirInfo ? (
            <div className={`conteudo-tag `}>
              <div className='icon-habilidade' color={info?.cores}>
                <IconeHabilidade className={info?.icones} color={info?.cores}></IconeHabilidade>
              </div>
              <div className='descricao-tag'>{info?.descricao}</div>
              <div className='experiencia-tag'>{info?.experiencia} anos de experiência</div>
              {/* {info?.projetos?.map((projeto) => {
                return (
                  <div key={projeto.id} className='projetos-tag'>
                    Usado em:
                    <a href={`#${projeto.id.toString()}`}>{projeto.titulo}</a>
                  </div>
                );
              })} */}
            </div>
          ) : (
            <div className='info-tag'>Selecione uma tecnologia</div>
          )}
        </div>
      </div>
    </section>
  );
}
