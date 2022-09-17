import { GetStaticPaths, GetStaticProps } from 'next';

import Layout from '@/components/Layout';
import ListDetail from '@/components/ListDetail';
import { User } from '@/types/user';
import { sampleUserData } from '@/utils/sample-data';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = (await sampleUserData).find((data) => data.id === Number(id));
    return { props: { item } };
  } catch (err: unknown) {
    return { props: { errors: err.message } };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await sampleUserData).map((user: User) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
};

type Props = {
  item?: User;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${item ? item.name : 'User Detail'} | Next.js + TypeScript Example`}>
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

export default StaticPropsDetail;
