import { AllEvent } from '@/models/datas';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

const SingleEvent = (props: { data: AllEvent }) => {
  const { data } = props;
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState('');

  const onSubmitEmail = async (e: unknown): boolean => {
    e.preventDefault();
    if (inputEmail && inputEmail.current) {
      const emailValue = inputEmail?.current?.value ? inputEmail?.current?.value : '';
      const eventId = router?.query.id;

      const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;

      if (!emailValue.match(regexEmail)) {
        setMessage('Wrong email address');
      }

      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: emailValue, eventId }),
        };
        const response = await fetch('/api/email-registration', options);

        if (response && response?.status === 200) {
          const data = await response.json();
          setMessage(`${emailValue} registred successfully`);
        } else {
          const errorStatus = response?.status ? response?.status : 'unknowned error';
          console.log({ errorStatus });
          if (response.status === 409) {
            setMessage('Email already registred ');
          } else {
            setMessage('Error');
          }
          throw new Error(`Error: ${errorStatus}`);
        }
      } catch (error) {
        console.error({ error });
      }
    }

    setTimeout(() => {
      setMessage('');
    }, 5000);
    return false;
  };

  return (
    <div className="event_single_page">
      <Image src={data.image} alt={data.title} width={1000} height={500} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <br />
      <form onSubmit={onSubmitEmail} className="email_registration">
        <label htmlFor="">Get Register for this event</label>
        <br />
        <input ref={inputEmail} id="email" placeholder="insert your email"></input>
        <button type="submit">submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SingleEvent;
