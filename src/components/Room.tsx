import { Card, CardHeader, CardBody } from "@nextui-org/card";

import Booking from "./Booking";

export interface RoomProps {
  id: number;
  title: string;
  description: string;
  price: number;
  isReserved: boolean;
  zone: string;
  roomNumber: number;
}

const Rooms: React.FC<RoomProps> = ({ title, description, price, isReserved, roomNumber }) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{roomNumber}</p>
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-default-500">{description}</small>
        <small className="text-default-500">S/.{price.toPrecision(5)}</small>
        <h4 className="font-bold text-large">{isReserved ? 'Reservado' : 'Disponible'}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Booking isReserved={isReserved} />
      </CardBody>
    </Card>
  );
}

export default Rooms;
