import { User } from '@/types/user';

type ListDetailProps<T extends User> = {
  item: T;
};

const ListDetail = <T extends User>({ item }: ListDetailProps<T>) => (
  <>
    <div>
      <h1>Detail for {item.name}</h1>
    </div>
    <div>
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </div>
  </>
);

export default ListDetail;
