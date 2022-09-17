import ListItem from '@/components/ListItem';
import { User } from '@/types/user';

type ListProps = {
  items: Array<User>;
};

const List = ({ items }: ListProps) => (
  <section>
    <summary>
      <h1>List</h1>
    </summary>
    <details>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <ListItem data={item} />
          </li>
        ))}
      </ul>
    </details>
  </section>
);

export default List;
