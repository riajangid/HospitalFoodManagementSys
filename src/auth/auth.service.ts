import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  validateUser(email: string, password: string): boolean {
    const validUsers = [
      { email: 'hospital_manager@xyz.com', password: 'Password@2025' },
      { email: 'hospital_pantry@xyz.com', password: 'Password@2025' },
      { email: 'hospital_delivery@xyz.com', password: 'Password@2025' },
    ];

    return validUsers.some((user) => user.email === email && user.password === password);
  }

  generateToken(email: string): string {
    return this.jwtService.sign({ email });
  }
}