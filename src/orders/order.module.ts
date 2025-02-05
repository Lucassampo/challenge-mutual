import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './order.service';
import { OrdersController } from './order.controller';
import { Order } from './order.entity';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, User])], // Registra entidades Order y User
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService], // Exporta el servicio si es necesario en otros módulos
})
export class OrdersModule {}