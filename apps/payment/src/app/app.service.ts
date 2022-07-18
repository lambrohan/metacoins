import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  getData(): { message: string } {
    return { message: 'Welcome to payment!' };
  }

  async getPayments() {
    return await this.prisma.payment.findMany();
  }
}
