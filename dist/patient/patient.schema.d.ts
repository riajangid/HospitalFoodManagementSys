import { Document } from 'mongoose';
export declare class Patient {
    name: string;
    age: number;
    gender: string;
    diseases?: string;
    allergies?: string;
    roomNumber: string;
    emergencyContact: string;
}
export type PatientDocument = Patient & Document;
export declare const PatientSchema: import("mongoose").Schema<Patient, import("mongoose").Model<Patient, any, any, any, Document<unknown, any, Patient> & Patient & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Patient, Document<unknown, {}, import("mongoose").FlatRecord<Patient>> & import("mongoose").FlatRecord<Patient> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
