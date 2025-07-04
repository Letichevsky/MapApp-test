// Trip data response types
export interface IActivity {
  id: number;
  name: string;
  description: string;
  photo_url: string;
  coords: {
    lat: number;
    lng: number;
  };
}

export interface IDay {
  id: number;
  title: string;
  activities: IActivity[];
}

export interface ITripData {
  trip_title: string;
  days: IDay[];
}
