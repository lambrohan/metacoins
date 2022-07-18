import { MICROSERVICE_INJ_TOKENS } from '@metacoins/shared';
import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(MICROSERVICE_INJ_TOKENS.AUTH)
    private readonly authClient: ClientProxy
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/users')
  getUsers() {
    return this.authClient.send('get_users', {});
  }
}
