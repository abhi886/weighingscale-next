interface DateReturnType {
  year: number;
  month: number;
  day: number;
  time: string;
}

export function date(): DateReturnType {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    time: date.toLocaleTimeString(),
  };
}
