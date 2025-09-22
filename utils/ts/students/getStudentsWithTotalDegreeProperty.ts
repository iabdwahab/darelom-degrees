import { calculateTotalDegree } from '../degrees/calculatingDegrees.js';
import { ParsedDegreesStudent } from '../interfaces/parsingDegrees';

export function getStudentsWithTotalDegreeProperty(students: ParsedDegreesStudent[]) {
  return students.map((student) => {
    return {
      ...student,
      total_degree: calculateTotalDegree(student),
    };
  });
}
