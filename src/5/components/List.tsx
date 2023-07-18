import { FunctionComponent, useMemo } from "react";
import Item from "./Item";

interface ListProps {
  searchTerm: string;
}
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

const List: FunctionComponent<ListProps> = ({ searchTerm }) => {
  const filteredItems = useMemo(() => {
    if (searchTerm) {
      return items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return items;
  }, [searchTerm]);

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  );
};

export default List;
