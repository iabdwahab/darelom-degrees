import { Student } from '../interfaces/parsingDegrees';
import { excludedSubjectFromTotalDegree } from '../static_data/staticData.js';

export function getStudentsWithoutExcludedSubjectsDegrees(students: Student[]) {
  const StudentsWithoutExcludedSubjectsDegrees: Student[] = [];

  students.forEach((student) => {
    const studentDegrees = student.student_degrees;

    const includedSubjectsToTotalDegree = studentDegrees.filter((subject) => {
      return !excludedSubjectFromTotalDegree.includes(subject.subject_name);
    });

    StudentsWithoutExcludedSubjectsDegrees.push({
      ...student,
      student_degrees: includedSubjectsToTotalDegree,
    });
  });

  return StudentsWithoutExcludedSubjectsDegrees;
}
