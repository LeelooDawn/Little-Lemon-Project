// used due to the META Project API Link not working and no solution being offered
// Got from fellow student in the Coursera Discussion forums
// Inspired by 'alexismenest' capstone 'mockAPI' logic

const seededGenerator = (date, hour) => {
  const m = 9;
  const d = date.getDate();
  const result = ((d + hour) % m) / 10;

  return result;
};

export const fetchAPI = function (date) {
  let result = [];

  result.push("--- Select a Time ---");

  for (let hour = 15; hour <= 23; hour++) {
    if (seededGenerator(date, hour) < 0.5) result.push(hour + ":00");
    if (seededGenerator(date, hour + 7) < 0.5) result.push(hour + ":30");
  }

  return result;
};

export const submitAPI = function (formData) {
  return true;
};
