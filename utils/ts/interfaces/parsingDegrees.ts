export interface Subject {
  subject_name: string;
  subject_degree: string;
  subject_degree_before_compassion: string;
}

export interface ParsedDegreeSubject {
  subject_name: string;
  subject_degree: number;
  subject_degree_before_compassion: string;
}

export interface Student {
  student_name: string;
  student_seatnumber: number;
  student_totalgrade: string;
  student_degrees: Subject[];
  student_takhallofat_degrees: Subject[];
}

export interface ParsedDegreesStudent {
  student_name: string;
  student_seatnumber: number;
  student_totalgrade: string;
  student_degrees: ParsedDegreeSubject[];
  student_takhallofat_degrees: ParsedDegreeSubject[];
}
