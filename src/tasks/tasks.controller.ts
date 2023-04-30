import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  listTasks() {
    return 'This action returns all tasks';
  }

  @Post()
  createTask(@Body() body: any) {
    return body;
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return `This action returns a #${id} task`;
  }
}
