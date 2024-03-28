import { IconButton, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import moment from 'moment';
import React from 'react';
import { ProjectProps, SkillProps } from '../types/ServicesProps';
import {
  Check,
  Close,
  DeleteOutline,
  EyeOutline,
  PencilOutline,
  Star,
  StarOutline,
} from 'mdi-material-ui';

interface RenderCellType<T> {
  row: T;
}

export const adminHomeProjectColumns: GridColDef<ProjectProps>[] = [
  {
    field: 'isActive',
    headerName: '',
    width: 10,
    renderCell: ({ row }: RenderCellType<ProjectProps>) => {
      return row.isActive ? (
        <Tooltip title="Active">
          <Box>
            <IconButton>
              <Star fontSize="small" />
            </IconButton>
          </Box>
        </Tooltip>
      ) : (
        <Tooltip title="Inactive">
          <Box>
            <IconButton>
              <StarOutline fontSize="small" />
            </IconButton>
          </Box>
        </Tooltip>
      );
    },
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 120,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 150,
    renderCell: ({ row }: RenderCellType<ProjectProps>) => {
      return moment(row.createdAt!).format('HH:mm:ss DD/MM/YYYY');
    },
  },
  {
    width: 120,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }: RenderCellType<ProjectProps>) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {row.isActive ? (
            <Tooltip title="Disable">
              <Box>
                <IconButton>
                  <Close fontSize="small" />
                </IconButton>
              </Box>
            </Tooltip>
          ) : (
            <Tooltip title="Activate">
              <Box>
                <IconButton>
                  <Check fontSize="small" />
                </IconButton>
              </Box>
            </Tooltip>
          )}
          <Tooltip title="View">
            <Box>
              <IconButton>
                <EyeOutline fontSize="small" />
              </IconButton>
            </Box>
          </Tooltip>
          <Tooltip title="Edit">
            <Box>
              <IconButton>
                <PencilOutline fontSize="small" />
              </IconButton>
            </Box>
          </Tooltip>
        </Box>
      );
    },
  },
];

export const adminHomeSkillColumns: GridColDef<SkillProps>[] = [
  {
    field: 'isActive',
    headerName: '',
    width: 10,
    renderCell: ({ row }: RenderCellType<SkillProps>) => {
      return row.isActive ? (
        <Tooltip title="Active">
          <Box>
            <IconButton>
              <Star fontSize="small" />
            </IconButton>
          </Box>
        </Tooltip>
      ) : (
        <Tooltip title="Inactive">
          <Box>
            <IconButton>
              <StarOutline fontSize="small" />
            </IconButton>
          </Box>
        </Tooltip>
      );
    },
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 120,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 150,
    renderCell: ({ row }: RenderCellType<SkillProps>) => {
      return moment(row.createdAt!).format('HH:mm:ss DD/MM/YYYY');
    },
  },
  {
    width: 120,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }: RenderCellType<SkillProps>) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {row.isActive ? (
            <Tooltip title="Disable">
              <Box>
                <IconButton>
                  <Close fontSize="small" />
                </IconButton>
              </Box>
            </Tooltip>
          ) : (
            <Tooltip title="Activate">
              <Box>
                <IconButton>
                  <Check fontSize="small" />
                </IconButton>
              </Box>
            </Tooltip>
          )}
          <Tooltip title="View">
            <Box>
              <IconButton>
                <EyeOutline fontSize="small" />
              </IconButton>
            </Box>
          </Tooltip>
          <Tooltip title="Edit">
            <Box>
              <IconButton>
                <PencilOutline fontSize="small" />
              </IconButton>
            </Box>
          </Tooltip>
        </Box>
      );
    },
  },
];
