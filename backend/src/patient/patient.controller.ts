import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PatientService } from './patient.service';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  getAllPatients() {
    return this.patientService.getAllPatients();
  }

  @Post()
  addPatient(@Body() body: any) {
    return this.patientService.addPatient(body);
  }
}