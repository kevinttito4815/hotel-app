import DefaultLayout from "@/layouts/default";

import Habitaciones, { RoomProps } from '../components/Room'
import ComboButton from "@/components/ComboButton";
import { useState } from "react";

export const rooms: RoomProps[] = [
  { id: 1, title: 'Habitación Matrimonial', description: '2 camas + TV + ducha caliente', price: 100, isReserved: true, roomNumber: 4, zone: 'CASONA' },
  { id: 2, title: 'Habitación Doble', description: '2 camas individuales + TV + ducha caliente', price: 80, isReserved: true, roomNumber: 22, zone: 'EDIFICIO' },
  { id: 3, title: 'Suite', description: '1 cama king size + TV + jacuzzi', price: 200, isReserved: false, roomNumber: 11, zone: 'EDIFICIO' },
  { id: 4, title: 'Suite', description: '1 cama king size + TV + jacuzzi', price: 200, isReserved: false, roomNumber: 20, zone: 'EDIFICIO' },
  { id: 5, title: 'Suite', description: '1 cama king size + TV + jacuzzi', price: 200, isReserved: true, roomNumber: 32, zone: 'EDIFICIO' },
  { id: 6, title: 'Suite', description: '1 cama king size + TV + jacuzzi', price: 200, isReserved: true, roomNumber: 34, zone: 'EDIFICIO' },
  { id: 7, title: 'Suite', description: '1 cama king size + TV + jacuzzi', price: 200, isReserved: true, roomNumber: 36, zone: 'EDIFICIO' },
  { id: 8, title: 'Suite', description: '1 cama king size + TV + jacuzzi', price: 200, isReserved: true, roomNumber: 5, zone: 'CASONA' },
  { id: 9, title: 'Suite', description: '1 cama king size + TV + jacuzzi', price: 200, isReserved: true, roomNumber: 6, zone: 'CASONA' },
  { id: 10, title: 'Suite', description: '1 cama king size + TV + jacuzzi', price: 200, isReserved: false, roomNumber: 7, zone: 'CASONA' },
];

export default function IndexPage() {
  const [selectedZone, setSelectedZone] = useState('EDIFICIO');
  const filteredRooms = rooms.filter(room => room.zone === selectedZone);
  return (
    <DefaultLayout>
      <ComboButton onSelectZone={setSelectedZone} />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8 md:py-10">
        {filteredRooms.map((room, index) => (
          <Habitaciones key={index} {...room} />
        ))}
      </section>
    </DefaultLayout>
  );
}
