"use client";
import {ColumnDef, flexRender, getCoreRowModel, useReactTable,} from '@tanstack/react-table';
import {useRouter} from 'next/navigation';
import {deleteCourt} from "./courts.api";

interface Court {
    id: number;
    name: string;
    sport_type: string[];
}

interface CourtsTableProps {
    data: Court[];
}

const CourtsTable: React.FC<CourtsTableProps> = ({data}) => {
    const router = useRouter();

    const onDelete = async (id: number) => {
        try {
            if (confirm('Are you sure you want to delete this court?')) {
                await deleteCourt(id);
                router.refresh();
            }
        } catch (e) {
            alert('There was an error deleting the court.');
        }
    }

    const columns: ColumnDef<Court>[] = [
        {
            accessorKey: 'id',
            header: 'ID',
        },
        {
            accessorKey: 'name',
            header: 'Nombre',
        },
        {
            accessorKey: 'sport_type',
            header: 'Deportes',
            cell: ({getValue}) => (getValue() as string[]).join(', '),
        },
        {
            id: 'actions',
            header: 'Acciones',
            cell: ({row}) => (
                <div className={"flex justify-center"}>
                    <button
                        onClick={() => router.push(`courts/${row.original.id}/edit`)}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                        Editar
                    </button>
                    <button
                        onClick={() => onDelete(row.original.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                    >
                        Eliminar
                    </button>
                </div>
            ),
        },
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div>
            <button className={"bg-gray-900 text-white rounded px-4 py-2"} onClick={() => {router.push("/api/auth/signout")}}>Cerrar sesion</button>
            <table className="min-w-full border-collapse table-auto">
                <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id} className="border-b p-4">
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id} className="border-b p-4">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourtsTable;
