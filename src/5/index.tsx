import { FunctionComponent, useState } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";

interface Task4Props {}

const Task4: FunctionComponent<Task4Props> = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Input onSearchTermChange={handleSearchTermChange} />
      <br />
      <List searchTerm={searchTerm} />
    </div>
  );
};

export default Task4;
