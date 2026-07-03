import { getParsedDegreesStudents } from './degrees/parsingDegrees.js';
import {studentsList} from './grade_2.js';
import { getStudentsWithoutExcludedSubjectsDegrees } from './students/getStudentsWithoutExcludedSubjectsDegrees.js';
import { getStudentsWithTotalDegreeProperty } from './students/getStudentsWithTotalDegreeProperty.js';
import { getAllGradeSubjects } from './subjects/getAllGradeSubjects.js';


const studentsWithExcludedSubjectsDegrees = getStudentsWithoutExcludedSubjectsDegrees(studentsList);
const parsedDegreesStudents = getParsedDegreesStudents(studentsWithExcludedSubjectsDegrees);

const studentsWithTotalDegreeProperty = getStudentsWithTotalDegreeProperty(parsedDegreesStudents);

const sortedList = studentsWithTotalDegreeProperty.sort((a, b) => b.total_degree - a.total_degree);


let lastRank = 1;
let lastTotalDegree = sortedList[0].total_degree;

const finalList = sortedList.map((student, index) => {
    if (student.total_degree === lastTotalDegree) {
        return {
            ...student,
            rank: lastRank
        }
    }


    if (student.total_degree !== lastTotalDegree) {
        lastRank += 1;
        lastTotalDegree = student.total_degree;

    }

    return {
        ...student,
        rank: lastRank
    }

})


const finalListWithPercentage = finalList.map(student => {
    return {
        ...student,
        student_seatnumber: String(student.student_seatnumber),
        percentage: (student.total_degree * 100 / 1400).toFixed(2) + '%',
        student_degrees: studentsList.find(s => s.student_seatnumber === student.student_seatnumber).student_degrees
    }
});
// const finalListWithPercentage = finalList.map(student => {
//     return {
//         name: student.student_name,
//         seatnumber: student.student_seatnumber,
//         rank: student.rank,
//         percentage: (student.total_degree * 100 / 1400).toFixed(2) + '%',
//         }
// });

console.log(finalListWithPercentage)