import { excludedSubjectFromTotalDegree } from '../static_data/staticData.js';
export function getStudentsWithoutExcludedSubjectsDegrees(students) {
    const StudentsWithoutExcludedSubjectsDegrees = [];
    students.forEach((student) => {
        const studentDegrees = student.student_degrees;
        const includedSubjectsToTotalDegree = studentDegrees.filter((subject) => {
            return !excludedSubjectFromTotalDegree.includes(subject.subject_name);
        });
        StudentsWithoutExcludedSubjectsDegrees.push(Object.assign(Object.assign({}, student), { student_degrees: includedSubjectsToTotalDegree }));
    });
    return StudentsWithoutExcludedSubjectsDegrees;
}
