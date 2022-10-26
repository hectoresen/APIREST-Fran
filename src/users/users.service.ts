
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import UserEntity from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>
  ){

  }


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
