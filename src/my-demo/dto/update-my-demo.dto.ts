import { PartialType } from '@nestjs/mapped-types';
import { CreateMyDemoDto } from './create-my-demo.dto';

export class UpdateMyDemoDto extends PartialType(CreateMyDemoDto) {}
