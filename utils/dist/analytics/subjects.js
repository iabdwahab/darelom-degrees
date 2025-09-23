export function getSubjectsAnalytics(students) {
    const analyticedSubjectsList = [];
    // Loop on students Array
    students.forEach((student) => {
        // Loop on student_degrees
        student.student_degrees.forEach((studentSubject) => {
            const studentSubjectName = studentSubject.subject_name;
            const studentSubjectDegree = studentSubject.subject_degree;
            const isStudentSucceed = studentSubjectDegree >= 50;
            // Find subjectIndex in analyticedSubjectsList
            const subjectIndex = analyticedSubjectsList.findIndex((item) => {
                return item.subject_name === studentSubjectName;
            });
            // If this subject founded in analyticedSubjectsList
            if (subjectIndex !== -1) {
                // Increase subject_students_count by 1
                analyticedSubjectsList[subjectIndex].subject_students.subject_students_count += 1;
                // Check if student was succeed
                if (isStudentSucceed) {
                    // Increase subject_succeed_students_count by 1
                    analyticedSubjectsList[subjectIndex].subject_students.subject_succeed_students_count += 1;
                }
                // If this subject not founded in analyticedSubjectsList
            }
            else {
                // Add an object with this subject
                analyticedSubjectsList.push({
                    subject_name: studentSubjectName,
                    subject_students: {
                        // Initial value as this student is the first one
                        subject_students_count: 1,
                        subject_succeed_students_count: isStudentSucceed ? 1 : 0,
                        subject_succeed_students_percentage: '',
                    },
                    subject_average_degree: '',
                });
            }
        });
    });
    return analyticedSubjectsList;
}
