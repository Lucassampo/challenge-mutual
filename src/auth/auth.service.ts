import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // Método que valida el email y genera el JWT
  async loginWithEmail(email: string) {
    // Buscar el usuario por email
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    // Generar un JWT con el email y el rol (si lo tienes)
    const payload = { email: user.email, role: user.role_id }; // O cualquier otro campo que quieras
    const accessToken = this.jwtService.sign(payload);

    return {
      access_token: accessToken, // El token JWT
    };
  }
}