import { GetServerSideProps } from 'next';

import Layout from '@/components/Layout';
import ListDetail from '@/components/ListDetail';
import { User } from '@/types/user';

type SSRProps<T extends User> = {
  user: T;
};
const SSR = <T extends User>({ user }: SSRProps<T>) => {
  return (
    <Layout title="SSR | Next.js + TypeScript">
      <ListDetail item={user} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async <T extends User>() => {
  const data = await fetch('http://localhost:3000/api/users/4');
  const user = (await data.json()) as T;
  return {
    props: {
      user,
    },
  };
};
export default SSR;
