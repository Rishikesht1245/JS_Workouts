import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // using NestFactory class to create the application.
  const app = await NestFactory.create(AppModule);
  // === To use express as the framework do as below
  // const app = await NestFactory.create<NestExpressApplication>(AppModule);

  await app.listen(3000);
}
bootstrap();
