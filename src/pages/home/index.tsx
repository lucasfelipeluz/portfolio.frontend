import React, { useEffect, useState } from 'react';
import useHomeServices from 'src/hooks/useServices/useHomeServices';
import Home from 'src/types/Home';

import View from 'src/views/home/View';

function HomePage() {
  const { data, isLoading, isSuccess, isError } = useHomeServices.getHome();

  const [homeData, setHomeData] = useState<Home>();

  useEffect(() => {
    if (data) {
      setHomeData(data);
    }
  }, [data]);

  if (!isSuccess && isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return <View data={homeData} />;
}

export default HomePage;
