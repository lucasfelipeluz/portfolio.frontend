import React from 'react';
import './index.scss';
import imgIlustracao from '../../assets/image/ilustracao.png';

export default function BoasVindas() {
  return (
    <section className='tela1 tela-inicial secao'>
      <div className='conteudo-inicial'>
        <div className='container-boasvindas'>
          <div className='apresentacao'>
            <p className='ola'>Olá, meu nome é</p>
            <p className='meu-nome'>Lucas Luz</p>
            <p className='cargo'>Desenvolvedor Full Stack</p>
          </div>
          <div className='informacoes'>
            <a
              className='curriculo informacoes-filho'
              href='assets/documents/curriculo_lucas_luz.pdf'
              download
            >
              <i className='fas fa-file-download'></i>Baixar CV
            </a>
            <p className='informacoes-vaga'>Atualmente não estou disponível para vagas</p>
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
