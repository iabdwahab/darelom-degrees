import { excludedSubjectFromTotalDegree } from '../static_data/staticData.js';
export function calculateTotalDegree(student) {
    const studentDegrees = student.student_degrees;
    // Initialize the total
    let totalDegree = 0;
    // Loop through subjects
    studentDegrees.forEach((degree) => {
        // Calculate degree only if the subject isn't excluded
        if (!excludedSubjectFromTotalDegree.includes(degree.subject_name))
            // Add subject_degree to the total
            totalDegree += degree.subject_degree;
    });
    return totalDegree;
}
