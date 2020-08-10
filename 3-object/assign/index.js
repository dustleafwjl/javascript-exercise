export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  const newSource = Object.assign(source);
  newSource.serialNumber = '12345';
  newSource.properties.status = 'processed';
  return newSource;
}
