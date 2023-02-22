import { ImportedDatas } from '@/models/datas';
import { EventsCityProps } from '@/models/props';

import SingleEvent from './single-event';

const SingleEventPage = (props: EventsCityProps) => {
  const { data } = props;

  return <SingleEvent data={data} />;
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
