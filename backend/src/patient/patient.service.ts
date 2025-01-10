import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient, PatientDocument } from './patient.schema';
import { CreatePatientDto } from './patient.dto';

@Injectable()
export class PatientService {
  constructor(@InjectModel(Patient.name) private patientModel: Model<PatientDocument>) {}

  getAllPatients() {
    return this.patientModel.find().exec();
  }

  addPatient(createPatientDto: CreatePatientDto) {
    const newPatient = new this.patientModel(createPatientDto);
    return newPatient.save();
  }
}