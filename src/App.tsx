import React from 'react';
import './App.scss';
import Header from './components/Header';
import BoasVindas from './components/BoasVindas';
import Projetos from './components/Projetos';
import Conhecimentos from './components/Conhecimentos';
import Contatos from './components/Contatos';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <BoasVindas />
      <Projetos />
      <Conhecimentos />
      <Contatos />
      <div className='botao-subir'></div>
      <Footer />
    </div>
  );
}

export default App;
