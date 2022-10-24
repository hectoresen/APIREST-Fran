import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//Firebase
import * as admin from 'firebase-admin';
import { ServiceAccount } from "firebase-admin";
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const adminConfig: ServiceAccount = {
    "projectId": configService.get<string>('FIREBASE_PROJECT_ID'),
    "privateKey": configService.get<string>('FIREBASE_PRIVATE_KEY')
      .replace(/\\n/g, '\n'),
    "clientEmail": configService.get<string>('FIREBASE_CLIENT_EMAIL'),
  };
  admin.initializeApp({
    databaseURL: configService.get('FIREBASE_DB_URL')
  });

  app.enableCors()
  await app.listen(3000);
}
bootstrap();
