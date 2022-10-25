import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  getMyProfile(id: string) {
    return {
      userName: 'test',
      height: '102',
      email: 'pepe@test.es',
    }
  }
}
