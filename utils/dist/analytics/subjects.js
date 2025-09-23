export function getTotalGradeAnalytics(students) {
    const totalGradesList = [];
    // Loop on students' List
    students.forEach((student) => {
        const studentTotalGrade = student.student_totalgrade;
        // Get Index of student's total grade in totalGradesList
        const totalGradeIndex = totalGradesList.findIndex((item) => {
            return item.grade_name === studentTotalGrade;
        });
        // "-1" means that this total grade not founded in the totalGradesList
        if (totalGradeIndex === -1) {
            // When total grade was not found; add new object with this total grade
            totalGradesList.push({
                grade_name: studentTotalGrade,
                grade_count: 1,
                grade_count_percentage: '',
            });
            // When total grade founded; increase its grade_count
        }
        else {
            totalGradesList[totalGradeIndex].grade_count += 1;
        }
    });
    /* Calculating Percentage */
    const studentsCount = students.length;
    totalGradesList.forEach((totalGrade) => {
        const totalGradePercentage = (totalGrade.grade_count * 100) / studentsCount;
        totalGrade.grade_count_percentage = totalGradePercentage.toFixed(2);
    });
    return totalGradesList;
}
