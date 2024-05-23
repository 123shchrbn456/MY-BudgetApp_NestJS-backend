import { PartialType } from '@nestjs/mapped-types';
import { CreateMyTryDto } from './create-my-try.dto';

export class UpdateMyTryDto extends PartialType(CreateMyTryDto) {}
