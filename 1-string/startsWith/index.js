export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  return collection.filter(ele => ele.startsWith('粤A')).length;
}
