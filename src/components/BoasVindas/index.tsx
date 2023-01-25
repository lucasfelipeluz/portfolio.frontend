import React, { useState, useCallback, useEffect } from 'react';
import { SobreMim } from '../../types/ServicesProps';
import useSobreMim from '../../hooks/cache/useSobreMimServices';
import './index.scss';
import imgIlustracao from '../../assets/image/ilustracao.png';

interface BoasVindasProps {
  sobreMim: SobreMim;
}

export default function BoasVindas({ sobreMim }: BoasVindasProps) {
  return (
    <section className='tela1 tela-inicial secao'>
      <div className='conteudo-inicial'>
        <div className='container-boasvindas'>
          <div className='apresentacao'>
            <p className='ola'>Olá, meu nome é</p>
            <p className='meu-nome'>{sobreMim.nome}</p>
            <p className='cargo'>{sobreMim?.titulo_emprego}</p>
          </div>

          <div className='informacoes'>
            <a
              className='curriculo informacoes-filho'
              href='https://drive.google.com/file/d/1Le0pNF0kqxo2ETvNsiWR7zDNymxIZrxY/view?usp=share_link'
              target='_blank'
            >
              <i className='fas fa-file-download'></i>Baixar CV
            </a>
            {!sobreMim.disponivel && (
              <p className='informacoes-vaga'>Atualmente não estou disponível para vagas</p>
            )}
          </div>
        </div>

        <div className='container-ilustracoes'>
          <div className='container-svg-desenvolvedor'>
            <div className='paisagem'>
              <img
                src={imgIlustracao}
                alt='Ilustração de Desenvolvedor numa sala.'
                className='paisagem-img'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
