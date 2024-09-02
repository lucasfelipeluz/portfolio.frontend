import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
  },
  {
    field: 'urlGithub',
    headerName: 'Url Github',
    type: 'string',
    width: 110,
  },
  {
    field: 'startedAt',
    headerName: 'Started At',
    width: 150,
  },
  {
    field: 'viewPriority',
    headerName: 'View Priority',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    title: 'Snow',
    urlGithub: 'https://github.com',
    startedAt: '28/11/1999',
    viewPriority: 14,
    createdAt: '28/11/1999',
  },
  {
    id: 2,
    title: 'Lannister',
    urlGithub: 'https://github.com',
    startedAt: '28/11/1999',
    viewPriority: 31,
    createdAt: '28/11/1999',
  },
  {
    id: 3,
    title: 'Lannister',
    urlGithub: 'https://github.com',
    startedAt: '28/11/1999',
    viewPriority: 31,
    createdAt: '28/11/1999',
  },
  {
    id: 4,
    title: 'Stark',
    urlGithub: 'https://github.com',
    startedAt: '28/11/1999',
    viewPriority: 11,
    createdAt: '28/11/1999',
  },
  {
    id: 5,
    title: 'Targaryen',
    urlGithub: 'https://github.com',
    startedAt: '28/11/1999',
    viewPriority: null,
    createdAt: '28/11/1999',
  },
  {
    id: 6,
    title: 'Melisandre',
    urlGithub: 'https://github.com',
    startedAt: '28/11/1999',
    viewPriority: 150,
    createdAt: '28/11/1999',
  },
  {
    id: 7,
    title: 'Clifford',
    urlGithub: 'https://github.com',
    startedAt: '28/11/1999',
    viewPriority: 44,
    createdAt: '28/11/1999',
  },
  {
    id: 8,
    title: 'Frances',
    urlGithub: 'https://github.com',
    startedAt: '28/11/1999',
    viewPriority: 36,
    createdAt: '28/11/1999',
  },
  {
    id: 9,
    title: 'Roxie',
    urlGithub: 'https://github.com',
    startedAt: '28/11/1999',
    viewPriority: 65,
    createdAt: '28/11/1999',
  },
];

export default function GridDashboardProject() {
  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        autoHeight
      />
    </Box>
  );
}
