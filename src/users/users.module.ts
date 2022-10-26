import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProviders } from './providers/user.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [UsersController],
  providers: [... userProviders, UsersService],
  imports: [DatabaseModule]
})
export class UsersModule {}
