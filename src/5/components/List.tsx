import { FunctionComponent } from "react";

// Components
import Item from "./Item";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */
interface ListProps {
  searchTerm: string;
}

const List: FunctionComponent<ListProps> = ({ searchTerm }) => {
  // Sample data for the list
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Durian",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Jackfruit",
    "Kiwi",
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  );
};

export default List;
