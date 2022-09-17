import { GetServerSideProps } from 'next';

import Layout from '@/components/Layout';
import ListDetail from '@/components/ListDetail';
import { User } from '@/types/user';

type SSRProps = {
  user: User;
};
const SSR = ({ user }: SSRProps) => {
  return (
    <Layout title="SSR | Next.js + TypeScript">
      <ListDetail item={user} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetch('http://localhost:3000/api/users/4');
  const user = (await data.json()) as User;
  return {
    props: {
      user,
    },
  };
};
export default SSR;
