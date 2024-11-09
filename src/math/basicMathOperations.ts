function add(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
export { add };
