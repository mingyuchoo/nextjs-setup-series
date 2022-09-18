import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
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
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <aside></aside>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
