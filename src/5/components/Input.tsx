import { FunctionComponent, ChangeEvent } from "react";

/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

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
