import { ImportedDatas } from '@/models/datas';
import { EventsCityProps } from '@/models/props';
import Image from 'next/image';
import Link from 'next/link';

const EventsPerCityPage = (props: EventsCityProps) => {
  const { data, cityName } = props;
  return (
    <div className="cat_events">
      <h1>{`Events in ${cityName.toUpperCase()}`}</h1>

      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`${cityName}/${ev.id}`}>
            <Image width={200} height={200} src={ev.image} alt={ev.title} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPerCityPage;

export async function getStaticPaths() {
  const { events_categories }: ImportedDatas = await import('../../../../data/data.json');

  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        city: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { allEvents }: ImportedDatas = await import('../../../../data/data.json');
  const id: string = context?.params.city;

  const data = allEvents.filter((ev) => ev.city.toUpperCase() === id.toUpperCase());

  return {
    props: {
      data,
      cityName: id,
    },
  };
}
