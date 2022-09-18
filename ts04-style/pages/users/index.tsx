import { GetStaticProps } from 'next';
import Link from 'next/link';

import Layout from '@/components/Layout';
import List from '@/components/List';
import { User } from '@/types/user';

type Props<T extends User> = {
  users: Array<T>;
};

const UsersIndex = <T extends User>({ users }: Props<T>) => (
  <Layout title="UsersIndex List | Next.js + TypeScript">
    <h1>UsersIndex</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <List items={users} />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export default UsersIndex;

export const getStaticProps: GetStaticProps = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const users: Array<User> = await fetch('http://localhost:3000/api/users').then((res) => res.json());
  return { props: { users }, revalidate: 10 };
};
