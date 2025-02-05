import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ApiResponse } from './user.types';

@Injectable()
export class ExternalUserService {
  constructor(private readonly httpService: HttpService) {}

  async fetchExternalUsers(): Promise< ApiResponse> {
    const url = 'https://randomuser.me/api/?results=1'; // Obtener 5 usuarios aleatorios
    try {
      const response = await firstValueFrom(this.httpService.get(url,{timeout:20000}));
      console.log('Usuarios obtenidos:', response.data);
      return response.data; // Solo retornamos la lista de usuarios
    } catch (error) {
      console.error('Error al obtener usuarios externos:', error.message);
      throw new Error('No se pudo obtener la información de la API externa');
    }
  }
}