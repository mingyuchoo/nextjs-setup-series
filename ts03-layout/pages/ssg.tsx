import { GetStaticProps } from 'next';

import Layout from '@/components/Layout';
import ListDetail from '@/components/ListDetail';
import { User } from '@/types/user';

type SSGProps = {
  user: User;
};
const SSG = ({ user }: SSGProps) => {
  return (
    <Layout title="SSG | Next.js + TypeScript">
      <ListDetail item={user} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/users/2');
  const user = (await res.json()) as User;
  return {
    props: {
      user,
    },
  };
};
export default SSG;
