import { AllEvent, EventsCategory } from './datas';

export interface MainProps {
  title: string;
  data: EventsCategory[];
}

export interface EventCitiesProps {
  title: string;
  data: EventsCategory[];
}

export interface EventsCityProps {
  data: AllEvent;
}
