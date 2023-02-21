import { HomeProps } from '@/models/props';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = (props: HomeProps) => {
  const { data } = props;
  return (
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
  );
};

export default HomePage;
