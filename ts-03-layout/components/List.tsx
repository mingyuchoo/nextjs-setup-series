import ListItem from '@/components/ListItem';
import { User } from '@/types/user';

type ListProps = {
  items: Array<User>;
};

const List = ({ items }: ListProps) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
