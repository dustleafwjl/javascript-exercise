// TODO 14: 在这里写实现代码
import Person from './person';

export default class Work extends Person {
  // eslint-disable-next-line no-useless-constructor
  constructor(name, age) {
    super(name, age);
  }

  introduce() {
    return `I am a Worker. I have a job.`;
  }
}
