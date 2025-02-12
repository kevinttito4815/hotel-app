import DefaultLayout from "@/layouts/default";
import RoomsTable, { RoomTable } from "@/components/RoomsTable";
import { CreateRoom } from "@/components/CreateRoom";
import axios from "axios";
import { useState, useEffect } from "react";


const DocsPage = () => {
  const [rooms, setRooms] = useState<RoomTable[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get<RoomTable[]>("http://localhost:8080/rooms");
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  const columns = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "title",
      label: "TITULO",
    },
    {
      key: "room_description",
      label: "DESCRIPCION",
    },
    {
      key: "price",
      label: "PRECIO",
    },
    {
      key: "room_number",
      label: "NRO DE HABITACION",
    }, {
      key: "zone",
      label: "ZONA",
    },
  ];


  return (
    <DefaultLayout>
      <div className="flex justify-end mb-2">
        <CreateRoom />
      </div>
      <RoomsTable rows={rooms} columns={columns} />
    </DefaultLayout>
  );
}

export default DocsPage;