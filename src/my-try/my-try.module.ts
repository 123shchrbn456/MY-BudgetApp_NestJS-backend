import { Module } from '@nestjs/common';
import { MyTryService } from './my-try.service';
import { MyTryController } from './my-try.controller';

@Module({
  controllers: [MyTryController],
  providers: [MyTryService],
})
export class MyTryModule {}
