import { NestFactory } from '@nestjs/core';
import { ModuleModule } from './module.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ModuleModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3002,
      },
    },
  );

  await app.listen();
  console.log('Module-service is listening');
}
bootstrap();
