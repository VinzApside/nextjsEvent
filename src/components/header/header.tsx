import Image from 'next/image';
import Link from 'next/link';

const HeaderComponent = () => {
  return (
    <header>
      <nav>
        <Image height="10" width="10" src="../../../public/vercel.svg" alt="favicon" />
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/about-us">About us</Link>
      </nav>
    </header>
  );
};

export default HeaderComponent;
