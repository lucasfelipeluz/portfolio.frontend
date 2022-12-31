import React, { useCallback, useEffect, useState } from 'react';

import './App.scss';
import HeaderComponent from './components/Header';
import BoasVindasComponent from './components/BoasVindas';
import ProjetosComponent from './components/Projetos';
import ConhecimentosComponent from './components/Conhecimentos';
import ContatosComponent from './components/Contatos';
import FooterComponent from './components/Footer';
import { Habilidades, Projetos, SobreMim } from './types/ServicesProps';
import useHomeServices from './hooks/cache/useHomeServices';
import Carregando from './components/Carregando';
import ErrorComponent from './components/Error';

function App() {
  const [projetos, setProjetos] = useState<Projetos[]>();
  const [habilidades, setHabilidades] = useState<Habilidades[]>();
  const [sobreMim, setSobreMim] = useState<SobreMim>();

  const { useGetAll } = useHomeServices();
  const { data, isError } = useGetAll();

  const atualizarData = useCallback(() => {
    setProjetos(data?.projetos);
    setHabilidades(data?.habilidades);
    setSobreMim(data?.sobreMim);
  }, [data]);

  useEffect(() => {
    atualizarData();
  }, [data]);

  return (
    <div className='App'>
      <HeaderComponent />
      {!data && !isError && <Carregando />}
      {isError && <ErrorComponent />}
      {sobreMim && <BoasVindasComponent sobreMim={sobreMim!} />}
      {projetos && <ProjetosComponent projetos={projetos} />}
      {habilidades && <ConhecimentosComponent conhecimentos={habilidades} />}
      {sobreMim && <ContatosComponent sobreMim={sobreMim} />}
      <FooterComponent />
    </div>
  );
}

export default App;
