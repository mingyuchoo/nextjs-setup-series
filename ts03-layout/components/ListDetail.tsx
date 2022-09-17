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
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </details>
  </article>
);

export default ListDetail;
