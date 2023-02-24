import React, { useCallback, useEffect, useState } from 'react';

function App() {
  // const [projetos, setProjetos] = useState<Projetos[]>();
  // const [habilidades, setHabilidades] = useState<Habilidades[]>();
  // const [sobreMim, setSobreMim] = useState<SobreMim>();

  // const { useGetAll } = useHomeServices();
  // const { data, isError } = useGetAll();

  // const atualizarData = useCallback(() => {
  //   setProjetos(data?.projetos);
  //   setHabilidades(data?.habilidades);
  //   setSobreMim(data?.sobreMim);
  // }, [data]);

  // useEffect(() => {
  //   atualizarData();
  // }, [data]);

  return (
    <div>Opa!saddas!</div>
    // <div className='App'>
    //   <HeaderComponent />
    //   {!data && !isError && <Carregando />}
    //   {isError && <ErrorComponent />}
    //   {sobreMim && <BoasVindasComponent sobreMim={sobreMim!} />}
    //   {projetos && <ProjetosComponent projetos={projetos} />}
    //   {habilidades && <ConhecimentosComponent conhecimentos={habilidades} />}
    //   {sobreMim && <ContatosComponent sobreMim={sobreMim} />}
    //   <FooterComponent />
    // </div>
  );
}

export default App;
