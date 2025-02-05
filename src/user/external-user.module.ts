import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ExternalUserService } from './external-user.service';

@Module({
  imports: [HttpModule], // Importamos HttpModule para manejar peticiones HTTP
  providers: [ExternalUserService], // Registramos el servicio
  exports: [ExternalUserService], // Exportamos el servicio para que otros módulos lo usen
})
export class ExternalUserModule {}