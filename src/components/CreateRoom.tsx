import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, useDisclosure } from "@nextui-org/react";


const zones = [
    { id: 1, description: 'CASONA' },
    { id: 2, description: 'EDIFICIO' },
];


export const CreateRoom = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button color="primary" onPress={onOpen} className="mt-5" size="sm">
                Crear habitacion
            </Button>
            <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange} backdrop="blur">
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">Crear habitacion</ModalHeader>
                        <ModalBody>
                            <div className="flex space-x-4">
                                <Select
                                    className="max-w-xs"
                                    label='ZONA'
                                >
                                    {zones.map((param) => (
                                        <SelectItem key={param.id}>{param.description}</SelectItem>
                                    ))}
                                </Select>
                                <Input
                                    label="NRO HABITACION"
                                    variant="bordered"
                                    type="number"
                                />
                            </div>
                            <Input
                                isRequired
                                label="TITULO"
                                placeholder="Ingrese el titulo de la habitacion"
                                variant="bordered"
                                errorMessage='El titulo es requerido'
                            />
                            <Input
                                isRequired
                                errorMessage='La descripcion es requerida'
                                label="DESCRIPCION"
                                placeholder="Ingrese la descripcion de la habitacion"
                                variant="bordered"
                            />
                            <Input
                                label="PRECIO"
                                placeholder='Ingrese el precio de la habitacion en soles'
                                variant="bordered"
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" type="submit">
                                Crear habitacion
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    );

}