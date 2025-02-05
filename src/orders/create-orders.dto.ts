import { IsString, IsInt, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  @IsNotEmpty()
  creationDate: string;
}