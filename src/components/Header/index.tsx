import React from 'react';
import './index.scss';

export default function Header() {
  return (
    <header>
      <div className='nav-bar'>
        <div className='nav-button'>
          <div className='burger' data-burger='inativo'>
            <div className='burger-button' data-filho-burger='inativo'></div>
            <div className='burger-button' data-filho-burger='inativo'></div>
            <div className='burger-button' data-filho-burger='inativo'></div>
          </div>
        </div>
        <div className='nome-portfolio'>
          <p>Portfólio</p>
        </div>

        <ul className='nav-itens'>
          <li className='nav-item'>
            <a href='projetos' data-target='projetos'>
              Projetos
            </a>
          </li>
          <li className='nav-item'>
            <a href='conhecimentos' data-target='conhecimentos'>
              Conhecimentos
            </a>
          </li>
          <li className='nav-item'>
            <a href='sobreMim' data-target='sobreMim'>
              Sobre mim
            </a>
          </li>
          <li className='nav-item'>
            <a href='contato' data-target='contato'>
              Contato
            </a>
          </li>
        </ul>

        <div className='menu-mobile' data-menu='inativo'>
          <div className='menu-container'>
            <ul className='nav-itens-mobile'>
              <li className='nav-item'>
                <a href='projetos' data-target='projetos'>
                  Projetos
                </a>
              </li>
              <li className='nav-item'>
                <a href='conhecimentos' data-target='conhecimentos'>
                  Conhecimentos
                </a>
              </li>
              <li className='nav-item'>
                <a href='sobreMim' data-target='sobreMim'>
                  Sobre Mim
                </a>
              </li>
              <li className='nav-item'>
                <a href='contato' data-target='contato'>
                  Fale Comigo
                </a>
              </li>
            </ul>

            <div className='barra-gradiente-mobile'></div>
          </div>
          <div className='sair-menu'></div>
        </div>
      </div>
      <div className='barra-gradiente'></div>
    </header>
  );
}
