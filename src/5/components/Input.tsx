import { FunctionComponent, ChangeEvent } from "react";

interface InputProps {
  onSearchTermChange: (term: string) => void;
}

const Input: FunctionComponent<InputProps> = ({ onSearchTermChange }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.currentTarget.value;
    onSearchTermChange(term);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} placeholder="Search..." />
    </div>
  );
};

export default Input;
