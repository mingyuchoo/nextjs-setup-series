import Link from 'next/link';

const MenuList = () => (
  <ul>
    <li>
      <input placeholder="Search..." />
    </li>
    <li>
      <Link href="/">Index</Link>
    </li>
    <li>
      <Link href="/csr">CSR</Link>
    </li>
    <li>
      <Link href="/ssg">SSG</Link>
    </li>
    <li>
      <Link href="/isr">ISR</Link>
    </li>
    <li>
      <Link href="/ssr">SSR</Link>
    </li>
    <li>
      <Link href="/users">User List</Link>
    </li>
  </ul>
);

export default MenuList;
