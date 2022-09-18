import { GetStaticProps } from 'next';

import Layout from '@/components/Layout';
import ListDetail from '@/components/ListDetail';
import { User } from '@/types/user';

type SSGProps<T extends User> = {
  user: T;
};
const SSG = <T extends User>({ user }: SSGProps<T>) => {
  return (
    <Layout title="SSG | Next.js + TypeScript">
      <ListDetail item={user} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async <T extends User>() => {
  const res = await fetch('http://localhost:3000/api/users/2');
  const user = (await res.json()) as T;
  return {
    props: {
      user,
    },
  };
};
export default SSG;
