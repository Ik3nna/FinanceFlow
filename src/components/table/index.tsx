import { useMemo } from "react";
import { useTable } from 'react-table';
import { COLUMNS } from "./columns";
import { Data } from "./table-data";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

function Table () {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => Data, [])
     
    const tableInstance = useTable({
        columns,
        data
    })
    
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance
    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table} {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                            {column.render('Header')}
                            </th>
                        ))}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell, index) => {
                                if (index === 0) {
                                    // Render image in the first column
                                    return (
                                    <td {...cell.getCellProps()}>
                                        <img src={cell.value} alt="Icon" />
                                    </td>
                                    );
                                } else if (index === 1) {
                                    // Apply description class to the second column (index 1)
                                    return (
                                    <td {...cell.getCellProps()} className={styles.description}>
                                        {cell.render('Cell')}
                                    </td>
                                    );
                                } else if (index === row.cells.length - 1) {
                                    // Render link in the last column
                                    return (
                                    <td {...cell.getCellProps()}>
                                        <Link to={cell.value} target="_blank" rel="noopener noreferrer">Visit Website</Link>
                                    </td>
                                    );
                                } else {
                                    return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                    );
                                }
                                })}
                            </tr>
                        );
                    })}
                </tbody>
        </table>
      </div>
    )
}

export default Table;