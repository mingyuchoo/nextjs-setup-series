import Link from 'next/link';

const Aside = () => {
  return (
    <aside>
      <input placeholder="Search..." />
      <Link href="/">
        <a>Index</a>
      </Link>
    </aside>
  );
};

export default Aside;
