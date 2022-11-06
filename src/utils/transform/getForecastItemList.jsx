import { toCelsius } from "../utils";

/**
 * Parse dataList in format:
 * [{
 *    hour: {integer},
 *    weekDay: {string},
 *    state: {string},
 *    temperature: {integer}
 * }]
 * @param {*} dataList
 * @returns
 */
const getForecastItemList = (dataList, locale) => {
    const interval = [4, 8, 12, 16, 20, 24];
    return dataList
      .filter((item, index) => interval.includes(index))
      .map((item) => {
        const itemDate = new Date(item.dt * 1000);
        return {
          hour: itemDate.getHours(),
          weekDay: itemDate.toLocaleDateString(locale, { weekday: "long" }),
          state: item.weather[0].main.toLowerCase(),
          temperature: toCelsius(item.main.temp),
        };
      });
};

export default getForecastItemList;
  