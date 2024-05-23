import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MyTryService } from './my-try.service';
import { CreateMyTryDto } from './dto/create-my-try.dto';
import { UpdateMyTryDto } from './dto/update-my-try.dto';

@Controller('my-try')
export class MyTryController {
  constructor(private readonly myTryService: MyTryService) {}

  @Post()
  create(@Body() createMyTryDto: CreateMyTryDto) {
    return this.myTryService.create(createMyTryDto);
  }

  @Get()
  findAll() {
    return this.myTryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.myTryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMyTryDto: UpdateMyTryDto) {
    return this.myTryService.update(+id, updateMyTryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.myTryService.remove(+id);
  }
}
