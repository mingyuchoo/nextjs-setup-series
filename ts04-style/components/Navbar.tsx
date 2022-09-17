import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Index</Link>|<Link href="/csr">CSR</Link>|<Link href="/ssg">SSG</Link>|<Link href="/isr">ISR</Link>
      |<Link href="/ssr">SSR</Link>|<Link href="/users">User List</Link>|<Link href="/api/users">Users API</Link>
    </nav>
  );
};

export default Navbar;
