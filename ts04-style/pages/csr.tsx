import useSWR, { Fetcher } from 'swr';

import Layout from '@/components/Layout';
import ListDetail from '@/components/ListDetail';
import { User } from '@/types/user';

const fetcher: Fetcher<User, string> = (...args) => fetch(...args).then((res) => res.json());

const CSR = () => {
  const { data, error } = useSWR<User, Error>('http://localhost:3000/api/users/1', fetcher);
  if (error) return <Layout title="CSR | Next.js + TypeScript"> Error </Layout>;
  if (!data) return <Layout title="CSR | Next.js + TypeScript"> No Data Found. </Layout>;
  return (
    <Layout title="CSR | Next.js + TypeScript">
      <ListDetail item={data} />
    </Layout>
  );
};

export default CSR;
