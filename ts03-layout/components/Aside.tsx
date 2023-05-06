import Link from 'next/link';

const Aside = () => {
  return (
    <aside>
      <input placeholder="Search..." />
      <Link href="/">Index</Link>
    </aside>
  );
};

export default Aside;
