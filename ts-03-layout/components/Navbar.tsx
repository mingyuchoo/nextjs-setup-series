import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      |
      <Link href="/about">
        <a>About</a>
      </Link>
      |
      <Link href="/users">
        <a>Users List</a>
      </Link>
      |<Link href="/api/users">Users API</Link>
    </nav>
  );
}