import { IsString, IsInt, IsOptional, IsDateString } from 'class-validator';

export class UpdateOrderDto {
  @IsInt()
  @IsOptional()
  userId?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  @IsOptional()
  creationDate?: string;
}