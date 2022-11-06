import { toCelsius } from "../utils";

const getChartData = (dataList, locale) => {
  const daysAhead = [0, 1, 2, 3, 4, 5];
  const now = new Date();
  const days = daysAhead.map((d) => {
    const dat = new Date();
    dat.setDate(now.getDate() + d);
    return dat;
  });

  const dateOptions = { weekday: "short" };

  return days
    .map((day) => {
      const dayHour = day.toLocaleDateString(locale, dateOptions);
      const temps = dataList
        .filter((item) => {
          const dtDate = new Date(item.dt * 1000); // from unix format
          return (
            dtDate.getFullYear() === day.getFullYear() &&
            dtDate.getMonth() === day.getMonth() &&
            dtDate.getDate() === day.getDate()
          );
        })
        .map((listDay) => listDay.main.temp);

      const min = toCelsius(Math.min(...temps));
      const max = toCelsius(Math.max(...temps));

      return {
        dayHour,
        min,
        max,
        hasTemps: !!temps.length,
      };
    })
    .filter((day) => day.hasTemps);
};

export default getChartData;
