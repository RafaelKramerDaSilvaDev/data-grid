export const hasNumber = (value: string) => {
  const regex = /\d/;
  return regex.test(value);
};
