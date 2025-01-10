app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { PatientModule } from './patient/patient.module';
import { DietChartModule } from './diet-chart/diet-chart.module';
import { DeliveryModule } from './delivery/delivery.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/hospital-management', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    AuthModule,
    PatientModule,
    DietChartModule,
    DeliveryModule,
  ],
})
export class AppModule {}