import React from 'react';
import { useRouter } from 'next/router';
import View from 'src/views/project/View';

function Page() {
  const router = useRouter();

  const { id } = router.query;

  if (!id) return <>Rota indisponivel</>;
  return <View id={parseInt(id.toString(), 10)} />;
}

export default Page;
