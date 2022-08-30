export function date() {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    time: date.toLocaleTimeString(),
  };
}
