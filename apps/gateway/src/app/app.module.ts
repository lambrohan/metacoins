import { MICROSERVICE_INJ_TOKENS } from '@metacoins/shared';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICROSERVICE_INJ_TOKENS.AUTH,
        transport: Transport.REDIS,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
