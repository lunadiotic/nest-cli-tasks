import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class TasksRepository {
  async findAll(): Promise<any> {
    const data = await readFile('tasks.json', 'utf-8');
    return JSON.parse(data);
  }

  async findOne(id: number) {
    const data = await readFile('tasks.json', 'utf-8');
    const tasks = JSON.parse(data);

    return tasks.find((task: any) => task.id === id);
  }

  async create(task: string) {
    const data = await readFile('tasks.json', 'utf-8');
    const tasks = JSON.parse(data);

    const newTask = {
      id: tasks[tasks.length - 1].id + 1,
      content: task,
    };

    tasks.push(newTask);

    await writeFile('tasks.json', JSON.stringify(tasks, null, 2), 'utf-8');
  }
}
