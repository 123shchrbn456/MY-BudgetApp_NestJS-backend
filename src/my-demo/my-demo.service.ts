import { Injectable } from '@nestjs/common'
import { CreateMyDemoDto } from './dto/create-my-demo.dto'
import { UpdateMyDemoDto } from './dto/update-my-demo.dto'
import { Repository } from 'typeorm'
import { MyDemo } from './entities/my-demo.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class MyDemoService {
	constructor(
		@InjectRepository(MyDemo)
		private readonly myDemoRepository: Repository<MyDemo>,
	) {}

	async create(createMyDemoDto: CreateMyDemoDto) {
		const newObj = {
			title: createMyDemoDto.title,
		}
		return await this.myDemoRepository.save(newObj)
	}

	async findAll() {
		return await this.myDemoRepository.find()
	}

	findOne(id: number) {
		return `This action returns a #${id} myDemo`
	}

	update(id: number, updateMyDemoDto: UpdateMyDemoDto) {
		return `This action updates a #${id} myDemo`
	}

	remove(id: number) {
		return `This action removes a #${id} myDemo`
	}
}
