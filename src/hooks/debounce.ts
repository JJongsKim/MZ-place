/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function debounce<T extends (...args: any) => void>(
  this: any,
  func: T,
  waitTime: number,
) {
  let timeout: NodeJS.Timeout;
  const currentContext = this;

  return function (...args: Parameters<T>): void {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(currentContext, args), waitTime);
  };
}
