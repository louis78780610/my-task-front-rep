import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  { field: 'size', headerName: 'Size', width: 52, headerAlign: 'center', align: 'center' },
  { field: 'chest', headerName: 'Chest', width: 96, headerAlign: 'center', align: 'center' },
  { field: 'weist', headerName: 'Weist', width: 96, headerAlign: 'center', align: 'center' },
  { field: 'height', headerName: 'Height', width: 96, headerAlign: 'center', align: 'center' },
];