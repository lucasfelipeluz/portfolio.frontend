import React, { useCallback, useContext, useEffect } from 'react';
import Header from '../views/Header';
import strings from '../utils/strings';
import { LanguageContext } from '../context/LanguageContext';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { NavItensProps } from '../types/Components';
import { Section, SectionTitle } from '../style/Globals';
import { AdminSection } from '../style/Admin';
import useHomeServices from '../hooks/useHomeServices';
import { HomeProps, ProjectProps } from '../types/ServicesProps';
import { adminHomeProjectColumns, adminHomeSkillColumns } from '../utils/columns';
import DataGridGlobal from '../components/DataGridGlobal';
import { Box, Button, Card } from '@mui/material';

export default function AdminHome() {
  const { language } = useContext(LanguageContext);

  const { useGetHomeAdmin } = useHomeServices();

  const [home, setHome] = React.useState<HomeProps>();

  const { data, refetch } = useGetHomeAdmin();

  const atualizarHome = useCallback(() => {
    setHome(data);
  }, [data, refetch]);

  useEffect(() => {
    atualizarHome();
  }, [atualizarHome]);

  const dataHeader: NavItensProps[] = [
    { id: 1, name: strings.projects[language.code], classNames: strings.classNames.projects },
    { id: 2, name: strings.skills[language.code], classNames: strings.classNames.skills },
    { id: 3, name: strings.aboutMe[language.code], classNames: strings.classNames.aboutMe },
    { id: 4, name: strings.contact[language.code], classNames: strings.classNames.contact },
  ];

  return (
    <div>
      <Header data={dataHeader} titleHeader="Administrador" />
      <AdminSection>
        <div className="container-lg container-fluid">
          <Box sx={{ mb: 5 }}>
            <SectionTitle>Projetos</SectionTitle>
            {data?.projects && (
              <DataGridGlobal
                data={data?.projects}
                columns={adminHomeProjectColumns}
                hrefAddButton="/add"
              />
            )}
          </Box>
          <Box>
            <SectionTitle>Skill</SectionTitle>
            {data?.skills && (
              <DataGridGlobal
                data={data?.skills}
                columns={adminHomeSkillColumns}
                hrefAddButton="/add"
              />
            )}
          </Box>
        </div>
      </AdminSection>
    </div>
  );
}
