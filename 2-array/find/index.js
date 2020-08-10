export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const person = collection.find(ele => ele.age <= 20 && ele.age > 10);
  return person.name;
}
