import Link from 'next/link';

import { User } from '@/types/user';

type ListItemProps = {
  data: User;
};

const ListItem = ({ data }: ListItemProps) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
