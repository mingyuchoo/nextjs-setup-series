import { User } from '@/types/user';

type ListDetailProps = {
  item: User;
};

const ListDetail = ({ item: user }: ListDetailProps) => (
  <article>
    <summary>
      <h1>Detail for {user.name}</h1>
    </summary>
    <details>
      <p>ID: {user.id}</p>
    </details>
  </article>
);

export default ListDetail;
