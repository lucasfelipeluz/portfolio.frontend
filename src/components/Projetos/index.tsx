import React from 'react';
import './index.scss';
import useProjetosServices from '../../hooks/cache/useProjetosServices';
import { Projetos } from '../../types/ServicesProps';

interface ProjetosProps {
  projetos: Projetos[];
}

export default function ProjetosComponent({ projetos }: ProjetosProps) {
  return (
    <section className='projetos secao' id='projetos' data-height>
      <h1 className='titulo-projetos titulo-secao'>Projetos</h1>

      <div className='conteudo-projetos'>
        {projetos &&
          projetos.map((projeto) => {
            return (
              <div className='projetos-filho' id={projeto.id.toString()} key={projeto.id}>
                <h3>{projeto.titulo}</h3>
                <div className='conteudo-projeto-filho'>
                  <div className='descricao-projeto'>{projeto.descricao}</div>
                  <div className='links-projeto'>
                    <a href={projeto.url_website} target='_blank'>
                      <i className='fas fa-link'></i> WebSite
                    </a>
                    <a href={projeto.url_github} target='_blank'>
                      <i className='fab fa-github'></i>Código
                    </a>
                  </div>
                  <div className='tags-projeto'>
                    {projeto.habilidades?.map((habilidade) => {
                      return <span key={habilidade.id}>{habilidade.titulo}</span>;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
