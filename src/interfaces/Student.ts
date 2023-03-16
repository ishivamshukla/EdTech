export interface Student { 
    _id?: string;
    name: string;
    fatherName: string;
    motherName: string;
    email: string;
    course: string;
    dateOfBirth: Date | string;
    address: string;
    rollNumber: string;
    password: string;
    isActive: boolean;
}