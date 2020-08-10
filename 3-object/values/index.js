export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  // eslint-disable-next-line no-unused-vars
  let result = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const [, value] of Object.entries(source)) {
    result += +value;
  }
  return result;
}
