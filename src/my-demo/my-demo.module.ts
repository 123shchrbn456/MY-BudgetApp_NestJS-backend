import { Module } from '@nestjs/common'
import { MyDemoService } from './my-demo.service'
import { MyDemoController } from './my-demo.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MyDemo } from './entities/my-demo.entity'

@Module({
	imports: [TypeOrmModule.forFeature([MyDemo])],
	controllers: [MyDemoController],
	providers: [MyDemoService],
})
export class MyDemoModule {}
