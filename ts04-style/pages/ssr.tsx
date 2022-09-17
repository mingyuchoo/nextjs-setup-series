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

export const getServerSideProps: GetServerSideProps = async ({ _req, res }) => {
  const data = await fetch('http://localhost:3000/api/users/4');
  const user = (await data.json()) as User;

  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

  return {
    props: {
      user,
    },
  };
};
export default SSR;
