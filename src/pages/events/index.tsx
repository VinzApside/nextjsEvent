import { ImportedDatas } from '@/models/datas';
import { EventCitiesProps } from '@/models/props';
import Image from 'next/image';

const EventIndexPage = (props: EventCitiesProps) => {
  const { title, data } = props;
  return (
    <div>
      <h1>{title}</h1>

      {data.map((ev) => {
        return (
          <a key={ev.id} href={`/events/${ev.id}`}>
            <Image width={200} height={100} src={ev.image} alt={ev.title} />
            <h2>{ev.title}</h2>
          </a>
        );
      })}
    </div>
  );
};

export default EventIndexPage;

export async function getStaticProps() {
  const data: ImportedDatas = await import('../../../data/data.json');

  return {
    props: {
      title: 'Event page',
      data: data.events_categories,
    },
  };
}
