import { Inject, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import UserEntity from './entities/user.entity';
import User from './models/user.model';

@Injectable()
export class UsersService {
  private Logger = new Logger(UsersService.name)

  // constructor(
  //   @Inject('USER_REPOSITORY')
  //   private readonly userRepository: Repository<UserEntity>,
  // ){}

  async create(dto) {
    try{
      const repo = getRepository(User)
      console.log(dto)
      return await repo.save(dto)
    }catch(error){
      const errorMessage = 'Error al crear paciente en la BBDD';
      this.Logger.error(errorMessage, error);
      throw new InternalServerErrorException({
        error: errorMessage
      })
    }
  }

  getMyProfile(id: string) {
    return {
      userName: 'test',
      height: '102',
      email: 'pepe@test.es',
    }
  }


}
