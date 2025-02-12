import { Button, ButtonGroup } from "@nextui-org/react";

interface ComboButtonProps {
    onSelectZone: (zone: string) => void;
  }

  const ComboButton: React.FC<ComboButtonProps> = ({ onSelectZone }) => {
    return (
      <ButtonGroup>
        <Button onPress={() => onSelectZone('CASONA')} className="btn btn-primary">CASONA</Button>
        <Button onPress={() => onSelectZone('EDIFICIO')} className="btn btn-primary">EDIFICIO</Button>
      </ButtonGroup>
    );
  };
  
  export default ComboButton;
