import { NestFactory } from '@nestjs/core';
import { ModuleModule } from './module.module';

async function bootstrap() {
  const app = await NestFactory.create(ModuleModule);
  await app.listen(3000);
}
bootstrap();
