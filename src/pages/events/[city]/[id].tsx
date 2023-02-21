import { ImportedDatas } from '@/models/datas';
import { EventsCityProps } from '@/models/props';
import Image from 'next/image';

const SingleEventPage = (props: EventsCityProps) => {
  const { data } = props;
  console.log({ data });

  return (
    <div>
      <Image src={data.image} alt={data.title} width={500} height={300} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default SingleEventPage;

export async function getStaticProps(context: unknown) {
  const { allEvents }: ImportedDatas = await import('../../../../data/data.json');
  const id: string = context?.params.id;

  const eventData = allEvents.find((ev) => ev.id.toUpperCase() === id.toUpperCase());
  return { props: { data: eventData } };
}

export async function getStaticPaths() {
  const { allEvents }: ImportedDatas = await import('../../../../data/data.json');

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        city: path.city.toLowerCase(),
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}
