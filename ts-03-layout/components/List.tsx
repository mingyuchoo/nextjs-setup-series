import React from 'react';

import ListItem from '@/components/ListItem';
import { User } from '@/types/user';

type Props = {
  items: Array<User>;
};

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
