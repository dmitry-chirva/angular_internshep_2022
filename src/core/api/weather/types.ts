type repayObjInArr = Array<object>;

type ForecastApiType = (
  town?: string,
  days?: number,
  aqi?: string,
  alerts?: string
) => Promise<repayObjInArr>;

type HistoryApiType = (town?: string, date?: string) => Promise<object>;

type SearchApiType = (town?: string) => Promise<repayObjInArr>;

export { ForecastApiType, HistoryApiType, SearchApiType };
