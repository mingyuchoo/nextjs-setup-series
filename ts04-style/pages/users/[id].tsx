import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

import Layout from '@/components/Layout';
import ListDetail from '@/components/ListDetail';
import { User } from '@/types/user';

type Props<T extends User> = {
  item?: T;
  errors?: string;
};

const UserId = <T extends User>({ item, errors }: Props<T>) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
        <Link href="/users">Go List</Link>
      </Layout>
    );
  }

  return (
    <Layout title={`${item ? item.name : 'User Detail'} | Next.js + TypeScript`}>
      {item && <ListDetail item={item} />}
      <Link href="/users">Go List</Link>
    </Layout>
  );
};

export default UserId;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const users: Array<User> = await fetch('http://localhost:3000/api/users').then((res) => res.json());
    const id = params?.id;
    // const item = users.find((data) => data.id === Number(id));
    const item = users.find((data) => data.id === id);
    return { props: { item } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const users: Array<User> = await fetch('http://localhost:3000/api/users').then((res) => res.json());
  const paths = users.map((user: User) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
};
