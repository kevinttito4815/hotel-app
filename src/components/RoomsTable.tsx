import { getKeyValue, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export interface RoomTable {
    id: number;
    title: string;
    room_description: string;
    price: number;
    room_number: number;
    zone: string;
}

export interface RoomsTableProps {
    rows: RoomTable[];
    columns: { key: string; label: string }[];
}

export default function RoomsTable({ rows, columns }: RoomsTableProps) {
    return (
        <Table aria-label="Example table with dynamic content">
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows} emptyContent="No hay informacion para mostrar">
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}