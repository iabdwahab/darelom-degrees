export function parseDegree(degree) {
    // Degree has 3 shapes
    //   1. `${number}`.
    //   2. `غـ`.
    //   3. `/${number}`.
    let manipulatedDegree = degree.replace('/', '');
    if (Number(manipulatedDegree)) {
        return Number(manipulatedDegree);
    }
    // If degree is not parsed, means that degree = 0.
    return 0;
}
export function getParsedDegreesStudents(students) {
    const parsedDegreesStudents = [];
    students.forEach((student) => {
        const manipulatedStudent = Object.assign(Object.assign({}, student), { 
            //Loop on student_degrees
            student_degrees: student.student_degrees.map((student_degree) => {
                return Object.assign(Object.assign({}, student_degree), { 
                    // Append parsed subject_degree
                    subject_degree: parseDegree(student_degree.subject_degree) });
            }), 
            // Loop on student_takhallofat_degrees
            student_takhallofat_degrees: student.student_takhallofat_degrees.map((student_takhallofat_degrees) => {
                return Object.assign(Object.assign({}, student_takhallofat_degrees), { 
                    // Append parsed subject_degree
                    subject_degree: parseDegree(student_takhallofat_degrees.subject_degree) });
            }) });
        parsedDegreesStudents.push(manipulatedStudent);
    });
    return parsedDegreesStudents;
}
