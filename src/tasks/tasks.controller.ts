import { Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  listTasks() {
    return 'This action returns all tasks';
  }

  @Post()
  createTask() {
    return 'This action creates a new task';
  }

  @Get('/:id')
  getTask() {
    return 'This action returns a #task';
  }
}
