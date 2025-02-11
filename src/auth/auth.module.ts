import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ExternalUserModule } from '../user/external-user.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), 
  JwtModule.register({ secret: 'your-secret-key' }),
  ExternalUserModule,
],
  controllers: [AuthController],
  providers: [AuthService, UserService],
  exports: [AuthService],
})
export class AuthModule {}