import Link from 'next/link';

const Aside = () => {
  return (
    <aside>
      <input placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </aside>
  );
};

export default Aside;
