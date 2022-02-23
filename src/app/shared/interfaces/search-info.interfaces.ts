export interface CurrentLocationI {
  location: Location;
  current: Current;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  localtime: string;
}

export interface Current {
  temp_c: number;
}
