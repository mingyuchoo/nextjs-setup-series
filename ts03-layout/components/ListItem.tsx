import Link from 'next/link';

import { User } from '@/types/user';

type ListItemProps = {
  data: User;
};

const ListItem = ({ data }: ListItemProps) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    {data.id}: {data.name}
  </Link>
);

export default ListItem;
