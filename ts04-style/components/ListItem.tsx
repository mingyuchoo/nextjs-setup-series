import Link from 'next/link';

import { User } from '@/types/user';

type ListItemProps<T extends User> = {
  item: T;
};

const ListItem = <T extends User>({ item }: ListItemProps<T>) => (
  <Link href="/users/[id]" as={`/users/${item.id}`}>
    {item.id}: {item.name}
  </Link>
);

export default ListItem;
