import Person from './person';

export default class Teacher extends Person {
  // eslint-disable-next-line constructor-super
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    if (!this.klass) {
      return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }
    return `${super.introduce()} I am a Teacher. I teach Class ${this.klass}.`;
  }
}
