import { ImportedDatas } from '@/models/datas';
import { MainProps } from '@/models/props';
import styles from '@/styles/Home.module.css';
import { Inter } from '@next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home(props: MainProps) {
  const { title, data } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Event app to deal with events" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <img src="../../public/favicon.ico" alt="favicon" />
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about-us">About us</Link>
        </nav>
      </header>

      <main className={styles.main}>
        {data.map((ev) => {
          return (
            <Link key={ev.id} href={`/events/${ev.id}`}>
              <Image width={200} height={100} src={ev.image} alt={ev.title} />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </Link>
          );
        })}
      </main>
      <footer className={styles.footer}>
        <p>2023 - Event app tutorial</p>
      </footer>
    </>
  );
}

export async function getServerSideProps() {
  const data: ImportedDatas = await import('../../data/data.json');

  return {
    props: {
      title: 'Events App',
      data: data.events_categories,
    },
  };
}
