/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('tiny'));
  const port = process.env.GATEWAY_PORT || 4000;

  // init swagger
  const config = new DocumentBuilder()
    .setTitle('Metacoins')
    .setDescription('Metacoins api docs')
    .build();
  const doc = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, doc);

  // listen
  await app.listen(port);
  Logger.log(`Gateway is running on: http://localhost:${port}`);
}

bootstrap();
