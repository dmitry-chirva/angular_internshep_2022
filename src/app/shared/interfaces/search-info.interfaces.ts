export interface CurrentLocation {
  coords: any;
  location: Location;
  current: CurrentTemp;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  localtime: string;
}

export interface CurrentTemp {
  temp_c: number;
}
