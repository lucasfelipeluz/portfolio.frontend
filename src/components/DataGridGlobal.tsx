import { Box, Button, Card } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { React } from 'mdi-material-ui';

interface Props<T> {
  data: T[];
  columns: GridColDef[];
  hrefAddButton?: string;
}

export default function DataGridGlobal<T>({ data, columns, hrefAddButton }: Props<T>) {
  return (
    <Card>
      <Box sx={{ display: 'flex', justifyContent: 'end', p: `${hrefAddButton ? '10px' : 0}` }}>
        {hrefAddButton && <Button variant="contained">Add</Button>}
      </Box>
      <DataGrid rows={data} columns={columns} style={{ backgroundColor: 'white' }} autoHeight />
    </Card>
  );
}
