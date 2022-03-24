export interface CurrentLocationWeather {
  current: CurrentTemp;
  location: CurrentLocation;
  latitude: number;
  longitude: number;
}
export interface CurrentLocation {
  localtime: string;
  name: string;
  country: string;
}

export interface CurrentTemp {
  temp_c: number;
  condition: {
    text: string;
  };
}
