type CurrentWeatherData = {
  location: { localtime: string; name: string; country: string };
  current: { temp_c: number };
};

export { CurrentWeatherData };
