import { PatientService } from './patient.service';
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    getAllPatients(): Promise<(import("mongoose").Document<unknown, {}, import("./patient.schema").PatientDocument> & import("./patient.schema").Patient & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    addPatient(body: any): Promise<import("mongoose").Document<unknown, {}, import("./patient.schema").PatientDocument> & import("./patient.schema").Patient & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
