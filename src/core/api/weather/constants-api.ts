const BASE_URL = 'http://api.weatherapi.com/v1/';
const API_KEY = 'b88614b3fb684e8b996104153220302';
const DATE_NOW_STR = new Date()
  .toLocaleDateString()
  .split('.')
  .reverse()
  .join('-');

export { BASE_URL, API_KEY, DATE_NOW_STR };
