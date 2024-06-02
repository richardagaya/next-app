// components/Header.js
import Link from 'next/link';

const Header = () => (
  <header style={headerStyle}>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  </header>
);

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
  background: '#333',
  color: '#fff',
};

export default Header;
