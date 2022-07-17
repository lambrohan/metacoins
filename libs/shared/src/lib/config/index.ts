import { RedisOptions, Transport } from '@nestjs/microservices';
export const RedisTransportConfig: RedisOptions = {
  transport: Transport.REDIS,
  options: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  },
};
