import Head from 'next/head';
import type { ReactNode } from 'react';

import Navbar from '@/components/Navbar';

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <hr />
        <span>I&apos;m here to stay (Footer)</span>
      </footer>
    </>
  );
}
