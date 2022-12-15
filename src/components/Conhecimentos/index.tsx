import React from 'react';
import './index.scss';

export default function Projetos() {
  return (
    <section className='conhecimentos secao' data-height>
      <h1 className='titulo-secao'>Conhecimentos</h1>

      <div className='conteudo-conhecimentos'>
        <div className='tags-conhecimentos'>
          <p className='instrucoes'></p>
        </div>

        <div className='conteudo-tags'></div>
      </div>
    </section>
  );
}
