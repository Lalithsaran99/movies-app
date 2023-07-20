export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
) => {
  let timerId: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timerId);
    timerId = setTimeout(() => func.apply(this, args), delay);
  };
};
