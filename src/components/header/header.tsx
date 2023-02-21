import Image from 'next/image';
import Link from 'next/link';

const HeaderComponent = () => {
  return (
    <header>
      <div>
        <Image height="50" width="50" src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg" alt="favicon" />
        <nav className="topNav">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about-us">About us</Link>
        </nav>
      </div>
      <h1>Events app</h1>
    </header>
  );
};

export default HeaderComponent;
