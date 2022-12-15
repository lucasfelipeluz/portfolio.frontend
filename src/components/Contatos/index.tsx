import React from 'react';
import './index.scss';

export default function Projetos() {
  return (
    <section className='sobremim-contato'>
      <div className='sobremim'>
        <h1 className='titulo-secao'>Sobre Mim</h1>

        <div className='conteudo-sobremim'>
          <div className='img-dev'>
            <img src='assets/image/img-dev.png' alt='' />
          </div>

          <div className='descricao-dev'>
            <p>
              Meu nome é Lucas Felipe Luz, sou de Recife - Pernambuco. Comecei a me interessar por
              programação em 2019 usando o Python, e me apaixonei por Desenvolvimento Web em 2020, e
              to nele até hoje. Atualmente, sou estágiario na Wipro Limited e além de ser
              autodidata, faço graduação de Análise e Desenvolvimento de Sistemas, mas nem só de
              linguagens de programação vive o homem, também estou aprendendo Inglês.
            </p>
          </div>
        </div>
      </div>

      <div className='contato'>
        <h1 className='titulo-secao'>Contato</h1>

        <div className='conteudo-contato'>
          <p className='informacoes-contato'>
            Se quiser me ajudar, ou até bater um papo sobre programação, não hesite em me chamar.
          </p>
          <div className='links-contato'>
            <a href='https://t.me/lucasfelipeluz' target='_blank' className='link-telegram link'>
              <i className='fab fa-telegram-plane'></i> Telegram
            </a>
            <a
              href='https://www.instagram.com/lucasfelipeluz/'
              target='_blank'
              className='link-instagram link'
            >
              <i className='fab fa-instagram'></i>Instagram
            </a>
            <a
              href='https://www.linkedin.com/in/lucasfelipeluz/'
              target='_blank'
              className='link-likendin link'
            >
              <i className='fab fa-linkedin'></i>Linkedin
            </a>
            <a href='mailto:lucasfelipeluz.dev@gmail.com' className='link-gmail link'>
              <i className='fas fa-envelope'></i>Gmail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
