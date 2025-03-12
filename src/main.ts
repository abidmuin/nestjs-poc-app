import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import tracer from './tracer';

async function bootstrap() {
  tracer.start();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
