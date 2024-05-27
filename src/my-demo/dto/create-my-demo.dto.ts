import { IsNotEmpty } from 'class-validator'

export class CreateMyDemoDto {
	@IsNotEmpty()
	title: string
}
