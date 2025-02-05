import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(email: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      const {...result } = user;  // Excluir la contraseña de la respuesta
      return result;  // Devuelve el usuario sin la contraseña
    }
    throw new UnauthorizedException('Usuario no encontrado');
  }
}