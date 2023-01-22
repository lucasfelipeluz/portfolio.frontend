import React from 'react';
import { SobreMim } from '../../types/ServicesProps';
import './index.scss';

interface ContatosProps {
  sobreMim: SobreMim;
}

export default function ContatosComponent({ sobreMim }: ContatosProps) {
  return (
    <section className='sobremim-contato' id='sobreMim'>
      <div className='sobremim'>
        <h1 className='titulo-secao'>Sobre Mim</h1>

        <div className='conteudo-sobremim'>
          <div className='img-dev'>
            <img
              src='https://media.licdn.com/dms/image/C4D03AQHmFTTk-D2XUQ/profile-displayphoto-shrink_800_800/0/1660354670162?e=1680134400&v=beta&t=jLjW4gUaYaTQh2bBospkKrYwaA9D5E4NhpdPB7MQZbo'
              alt=''
            />
          </div>

          <div className='descricao-dev'>
            <p>{sobreMim.texto}</p>
          </div>
        </div>
      </div>

      <div className='contato' id='contato'>
        <h1 className='titulo-secao'>Contato</h1>

        <div className='conteudo-contato'>
          <p className='informacoes-contato'>
            Se quiser me ajudar, ou até bater um papo sobre programação, não hesite em me chamar.
          </p>
          <div className='links-contato'>
            <a href={sobreMim.link_telegram} target='_blank' className='link-telegram link'>
              <i className='fab fa-telegram-plane'></i> Telegram
            </a>
            <a href={sobreMim.link_instagram} target='_blank' className='link-instagram link'>
              <i className='fab fa-instagram'></i>Instagram
            </a>
            <a href={sobreMim.link_linkedin} target='_blank' className='link-likendin link'>
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
