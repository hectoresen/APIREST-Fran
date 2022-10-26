import { Logger } from '@nestjs/common';
import { Connection } from "typeorm";
import UserEntity from '../entities/user.entity';

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection: Connection) => {
            try {
                return connection.getRepository(UserEntity);
            }catch(error){
                Logger.error('Error al cargar Usuario Repository', error);
            }
        },
        inject: ['POSTGRES_CONNECTION']
    }
]