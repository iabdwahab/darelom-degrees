// This function's mission is to collect all subjects' names.
// Doing this because there are students who have subjects that different than other.
export function getAllGradeSubjects(students) {
    const subjects = [];
    students.forEach((student) => {
        // Get an array of current student's subjects
        const studentSubjectsNames = student.student_degrees.map((studentSubjectDegree) => {
            return studentSubjectDegree.subject_name;
        });
        // Loop through student's subjects
        studentSubjectsNames.forEach((subjectName) => {
            // Check if the subject isn't founded in the subjects array
            if (!subjects.includes(subjectName)) {
                subjects.push(subjectName);
            }
        });
    });
    return subjects;
}
