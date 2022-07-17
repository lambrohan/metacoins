/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { RedisTransportConfig } from '@metacoins/shared';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    RedisTransportConfig
  );
  await app.listen();
  Logger.log(`Payment Microservice Started`);
}

bootstrap();
