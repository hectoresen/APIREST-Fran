import { UserProfileInterface } from './interfaces/profile-user.interface';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserFromRequest } from 'src/common/decorators/user-from-request.decorator';
import User from './models/user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/sign-up')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/me')
  async getMyProfile (
    @UserFromRequest() user: User
  ): Promise <UserProfileInterface>{
    const {id} = user.attributes()
    return this.usersService.getMyProfile(id)
  }
}
