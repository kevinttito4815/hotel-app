import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    DatePicker
} from "@nextui-org/react";

import { now, getLocalTimeZone, ZonedDateTime } from "@internationalized/date";

import Select from './CutomSelect'
import { useState } from "react";

export interface BookingProps {
    isReserved: boolean;
}

const documents = [
    { id: 1, description: 'DNI' },
    { id: 2, description: 'PASAPORTE' },
    { id: 3, description: 'CARNET DE EXTRANJERIA' },
    { id: 4, description: 'OTRO' }
];

const typeOfPayments = [
    { id: 1, description: 'EFECTIVO' },
    { id: 2, description: 'YAPE' },
    { id: 3, description: 'PLIN' },
];

export default function Booking({ isReserved }: BookingProps) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const [zone, setZone] = useState('')
    const [documentNumber, setDocumentNumber] = useState('')
    const [names, setNames] = useState('')
    const [lastNames, setLastNames] = useState('')
    const [cellphone, setCellphone] = useState('')
    const [email, setEmail] = useState('')
    const [typeOfPayment, setTypeOfPayment] = useState('')
    const [amount, setAmount] = useState(0)

    const handleBooking = () => {
        const bookingData = {
            zone,
            documentNumber,
            names,
            lastNames,
            cellphone,
            email,
            typeOfPayment,
            amount
        };
        console.log(bookingData);
        onClose();
    }



    return (
        <>
            <Button color="primary"
                onPress={onOpen}
                className="mt-5"
                size="sm"
                isDisabled={isReserved}
            >
                Reservar
            </Button>
            <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange} backdrop="blur">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Reservar Huesped</ModalHeader>
                            <ModalBody>
                                <div className="flex space-x-4">
                                    <Select params={documents} label="TIPO DE DOCUMENTO" />
                                    <Input
                                        isRequired
                                        label="NRO DOCUMENTO"
                                        variant="bordered"
                                        onChange={(e) => setDocumentNumber(e.target.value)}
                                    />
                                </div>
                                <Input
                                    isRequired
                                    label="NOMBRES"
                                    placeholder="Ingrese nombres completos"
                                    variant="bordered"
                                    onChange={(e) => setNames(e.target.value)}
                                />
                                <Input
                                    isRequired
                                    label="APELLIDOS"
                                    placeholder="Ingrese apellidos completos"
                                    variant="bordered"
                                    onChange={(e) => setLastNames(e.target.value)}
                                />
                                <Input
                                    label="NRO DE CELULAR"
                                    placeholder="Ingrese numero de celular"
                                    variant="bordered"
                                    onChange={(e) => setCellphone(e.target.value)}
                                />
                                <Input
                                    label="EMAIL"
                                    placeholder="Ingrese email"
                                    variant="bordered"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="flex space-x-1">
                                    <DatePicker
                                        isRequired
                                        className="max-w-[284px]"
                                        hideTimeZone
                                        defaultValue={now(getLocalTimeZone())}
                                        label="Check In"
                                    />
                                    <DatePicker
                                        isRequired
                                        className="max-w-[284px]"
                                        hideTimeZone
                                        defaultValue={now(getLocalTimeZone())}
                                        label="Check Out" />
                                </div>
                                <div className="flex space-x-4">
                                    <Select params={typeOfPayments} label="TIPO DE PAGO" />
                                    <Input
                                        isRequired
                                        label="MONTO"
                                        variant="bordered"
                                        placeholder="0.00"
                                        type="number"
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onPress={onClose}>
                                    Reservar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
