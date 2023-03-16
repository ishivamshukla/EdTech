export interface Results { 
    _id?: string;
    studentId: string;
    semester: number;
    subjectId: number;
    maxMarks: number;
    minMarks: number;
    obtainedMarks:number;
    result: string;
    passYear: string;
}