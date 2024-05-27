import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MyDemoService } from './my-demo.service';
import { CreateMyDemoDto } from './dto/create-my-demo.dto';
import { UpdateMyDemoDto } from './dto/update-my-demo.dto';

@Controller('my-demo')
export class MyDemoController {
  constructor(private readonly myDemoService: MyDemoService) {}

  @Post()
  create(@Body() createMyDemoDto: CreateMyDemoDto) {
    return this.myDemoService.create(createMyDemoDto);
  }

  @Get()
  findAll() {
    return this.myDemoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.myDemoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMyDemoDto: UpdateMyDemoDto) {
    return this.myDemoService.update(+id, updateMyDemoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.myDemoService.remove(+id);
  }
}
