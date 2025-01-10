import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    validateUser(email: string, password: string): boolean;
    generateToken(email: string): string;
}
