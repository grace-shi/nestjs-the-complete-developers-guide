import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

// no dependencies
@Module({
  providers: [PowerService],
  exports: [PowerService],
})
export class PowerModule {}
