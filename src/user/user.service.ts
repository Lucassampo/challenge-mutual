import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { ExternalUserService } from './external-user.service';
import { ApiResponse, ApiUser } from './user.types';



@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly externalUserService: ExternalUserService,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  // Actualizar un usuario
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    // Buscar el usuario por ID
    const user = await this.userRepository.findOne({
      where: { id: id },  // Buscar por ID
    });
  
    if (!user) {
      throw new Error('Usuario no encontrado'); // Puedes lanzar una excepción personalizada o usar NotFoundException
    }
  
    // Asignar los datos de la actualización
    Object.assign(user, updateUserDto);
  
    // Guardar los cambios
    return this.userRepository.save(user);
  }
  async getExternalUsers(): Promise<ApiResponse> {
    return await this.externalUserService.fetchExternalUsers();
  }
  
  async migrateUsers(externalUsers: ApiUser[]): Promise<User[]> {
    const usersToSave = externalUsers.map(user => {
      const newUser = new User();
      newUser.name = `${user.name.first} ${user.name.last}`;
      newUser.email = user.email;
      newUser.phone = user.phone;
      newUser.role_id = Math.floor(Math.random() * 3) + 1;
      return newUser;
    });
    return this.userRepository.save(usersToSave);
  }

  // Método para buscar un usuario por su email
  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  // Método para asignar rol a un usuario ya existente (si es necesario)
  async assignRole(email: string, role: number): Promise<User> {
    const user = await this.findByEmail(email);
    if (!user) throw new Error('Usuario no encontrado');
  
    user.role_id = role;
    return this.userRepository.save(user);
  }
}