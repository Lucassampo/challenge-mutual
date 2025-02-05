import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { ExternalUserService } from './external-user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService,
  private readonly externalUserService: ExternalUserService
  ) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('external')
  async fetchExternalUsers() {
    return await this.userService.getExternalUsers();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('migrate')
  async migrateUsers() {
    const externalUsers = await this.externalUserService.fetchExternalUsers();
    console.log(externalUsers.results);
    return this.userService.migrateUsers(externalUsers.results);
  }


  //  @Post()
  //  create(@Body() body: { name: string; email: string }) {
  //    return this.userService.create(body.name, body.email);
  //  }
}
