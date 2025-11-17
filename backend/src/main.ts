import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors({
    origin: [
      'http://localhost:8081',
      'https://kupi-frontend.nomorepartiessbs.ru',
    ],
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 5000);
}

bootstrap();
