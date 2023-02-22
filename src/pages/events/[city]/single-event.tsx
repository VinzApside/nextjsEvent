import { AllEvent } from '@/models/datas';
import Image from 'next/image';

const SingleEvent = (props: { data: AllEvent }) => {
  const { data } = props;

  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <div className="event_single_page">
      <Image src={data.image} alt={data.title} width={1000} height={500} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <br />
      <form onSubmit={onSubmit} className="email_registration">
        <label htmlFor="">Get Register for this event</label>
        <br />
        <input type="email" id="email" placeholder="insert your email"></input>
        <button type="button">submit</button>
      </form>
    </div>
  );
};

export default SingleEvent;
