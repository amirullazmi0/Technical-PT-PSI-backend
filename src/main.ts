import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const env = app.get(ConfigService);
  const port = env.get('PORT') || 4444;
  await app.listen(port);
  console.log(`Server running on port ${port}`);
}
bootstrap();
