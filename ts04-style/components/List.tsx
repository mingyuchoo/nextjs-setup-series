import ListItem from '@/components/ListItem';
import { User } from '@/types/user';

type ListProps<T extends User> = {
  items: Array<T>;
};

const List = <T extends User>({ items }: ListProps<T>) => {
  return (
    <>
      <div>
        <h1>List</h1>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <ListItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
