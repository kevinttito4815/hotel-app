import { Select, SelectItem } from "@nextui-org/react";

interface SelectProps {
    params: { id: number, description: string }[];
    label: string;
}

export default function CustomSelect({ params, label }: SelectProps) {
    return (
        <Select
            className="max-w-xs"
            label={label}
            isRequired
        >
            {params.map((param) => (
                <SelectItem key={param.id}>{param.description}</SelectItem>
            ))}
        </Select>
    );
}