import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { Order } from './orders/order.entity';
import { OrdersModule } from './orders/order.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/role.entity';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // O el tipo de base de datos que estés usando
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Tu usuario
      password: '91218', // Tu contraseña
      database: 'mutual-challengue', // Tu base de datos
      autoLoadEntities: true, //no funciona
      entities: [User, Order, Role],
      synchronize: false,
      logger:'debug'
    }),
    UserModule, OrdersModule, RolesModule,HttpModule,AuthModule,
  ],
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {}
