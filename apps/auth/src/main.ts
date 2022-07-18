import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { RedisTransportConfig } from '@metacoins/shared';
import { MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    RedisTransportConfig
  );
  app.listen();
  Logger.log(`Auth Service Started`);
}

bootstrap();
