import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

export class CreatePatientDto {
  @IsNotEmpty() @IsString() name: string;
  @IsNotEmpty() @IsInt() age: number;
  @IsNotEmpty() @IsString() gender: string;
  @IsOptional() @IsString() diseases?: string;
  @IsOptional() @IsString() allergies?: string;
  @IsNotEmpty() @IsString() roomNumber: string;
  @IsNotEmpty() @IsString() emergencyContact: string;
}