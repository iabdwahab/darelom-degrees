import { calculateTotalDegree } from '../degrees/calculatingDegrees.js';
export function getStudentsWithTotalDegreeProperty(students) {
    return students.map((student) => {
        return Object.assign(Object.assign({}, student), { total_degree: calculateTotalDegree(student) });
    });
}
