import HomePage from '@/components/home/home';
import { ImportedDatas } from '@/models/datas';
import { MainProps } from '@/models/props';
import { Inter } from '@next/font/google';
import Head from 'next/head';

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

      <HomePage data={data} />
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
