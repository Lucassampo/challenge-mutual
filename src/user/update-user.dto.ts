import { IsString, IsOptional, IsEmail, IsNumber } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional() // Marca el campo como opcional
  name?: string;

  @IsEmail()
  @IsOptional() // Marca el campo como opcional
  email?: string;

    @IsNumber()
    @IsString()
    phone: string;

  // Puedes agregar más campos como teléfono, dirección, etc.
}