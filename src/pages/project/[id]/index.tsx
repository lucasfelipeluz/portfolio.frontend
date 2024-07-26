import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useHomeServices from 'src/hooks/useServices/useHomeServices';
import { Project } from 'src/types/Project';
import View from 'src/views/project/View';

function Page() {
  const router = useRouter();

  const { id } = router.query;

  const { data, refetch, isLoading, isSuccess, isError } = useHomeServices.getHomeProject(
    parseInt(id as string, 10),
  );

  const [projectData, setProjectData] = useState<Project>();

  useEffect(() => {
    if (data) {
      setProjectData(data);
    }
    refetch();
  }, [id]);

  if (projectData) {
    return <View project={projectData!} />;
  }

  return <div>Loading...</div>;
}

export default Page;
