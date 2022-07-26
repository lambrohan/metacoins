import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('status')
  handleStatus() {
    return 'auth ok';
  }

  @MessagePattern('get_users')
  async handleGetUsers() {
    return await this.appService.getUsers();
  }
}
