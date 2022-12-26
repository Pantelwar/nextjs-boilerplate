export const wait = <T = unknown>(duration: number, data?: T) => {
  return new Promise<T | void>((resolve) => {
    setTimeout(() => resolve(data), duration);
  });
};
