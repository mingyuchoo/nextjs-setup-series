import { GetStaticPaths, GetStaticProps } from 'next';

import Layout from '@/components/Layout';
import ListDetail from '@/components/ListDetail';
import { User } from '@/types/user';

type ISRProps = {
  user: User;
};
const ISR = ({ user }: ISRProps) => {
  return (
    <Layout title="ISR | Next.js + TypeScript">
      <ListDetail item={user} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/3');
  const user = (await res.json()) as User;
  return {
    props: {
      user,
    },
    revalidate: 5,
  };
};

export default ISR;
