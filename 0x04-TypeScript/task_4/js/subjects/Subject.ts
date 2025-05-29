import { Subjects } from './Teacher';

class Subject {
  teacher: Subjects.Teacher;
  setTeacher(teacher: Subjects.Teacher) {
    this.teacher = teacher;
  }
}

export { Subject };