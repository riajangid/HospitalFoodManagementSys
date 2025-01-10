import { Model } from 'mongoose';
import { Patient, PatientDocument } from './patient.schema';
import { CreatePatientDto } from './patient.dto';
export declare class PatientService {
    private patientModel;
    constructor(patientModel: Model<PatientDocument>);
    getAllPatients(): Promise<(import("mongoose").Document<unknown, {}, PatientDocument> & Patient & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    addPatient(createPatientDto: CreatePatientDto): Promise<import("mongoose").Document<unknown, {}, PatientDocument> & Patient & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
