export const isNumber = (value: string) => {
  const regex = /^[0-9\b]+$/; //
  return regex.test(value);
};
