import { Module } from '@nestjs/common';

import { ApiController } from './api.controller';

@Module({
  providers: [],
  controllers: [ApiController],
})
export class ApiModule {}
