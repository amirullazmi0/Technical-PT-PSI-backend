import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const env = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: env.get('ALLOWED_ORIGIN'),
    methods: ['*'],
  });
  const port = env.get('PORT');
  await app.listen(port);
  console.log(`Server running on port ${port}`);
}
bootstrap();
