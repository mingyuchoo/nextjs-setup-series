import { GetStaticProps } from 'next';

import Layout from '@/components/Layout';
import ListDetail from '@/components/ListDetail';
import { User } from '@/types/user';

type ISRProps<T extends User> = {
  user: T;
};
const ISR = <T extends User>({ user }: ISRProps<T>) => {
  return (
    <Layout title="ISR | Next.js + TypeScript">
      <ListDetail item={user} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async <T extends User>() => {
  const id = '05c13117-bdae-4aa0-a47c-c97aac1ab7e0';
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const user = (await res.json()) as T;
  return {
    props: {
      user,
    },
    revalidate: 5,
  };
};

export default ISR;
