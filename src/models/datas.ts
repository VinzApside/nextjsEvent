export interface EventsCategory {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface AllEvent {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
  emails_registered: string[];
}

export interface ImportedDatas {
  events_categories: EventsCategory[];
  allEvents: AllEvent[];
}
