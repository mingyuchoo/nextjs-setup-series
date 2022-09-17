import Head from 'next/head';
import type { ReactNode } from 'react';

import Aside from '@/components/Aside';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

type LayoutProps = {
  title?: string;
  children?: ReactNode;
};

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Navbar />
      <Aside />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
