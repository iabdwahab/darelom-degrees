//
// This file was created to check missing seatnumbers of the students list
// The reason is: sometimes "selenium" skip seatnumber but it has a student data
//

const data = require('./data.json');

let lastSeatnumber = 20001;

data.forEach((student) => {
  if (student.student_seatnumber - lastSeatnumber === 2) {
    console.log(student.student_seatnumber - 1);
  }

  lastSeatnumber = student.student_seatnumber;
});
