import { Data } from "./table-data"; 
type DataType = typeof Data[0];

export const COLUMNS = [
    {
      Header: 'NAME',
      accessor: 'icon' as keyof DataType,
    },
    {
      Header: 'DESCRIPTION',
      accessor: 'desc' as keyof DataType,
    },
    {
      Header: 'MARKET CAP',
      accessor: 'marCap' as keyof DataType,
    },
    {
      Header: 'VOLUME',
      accessor: 'vol' as keyof DataType,
    },
    {
      Header: 'WEBSITE',
      accessor: 'website' as keyof DataType,
    }
];