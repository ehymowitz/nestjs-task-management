import { Injectable, NotFoundException } from '@nestjs/common';
import TaskStatus from './task-status.enum';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  //
  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       task.title.includes(search) || task.description.includes(search);
  //     });
  //   }
  //
  //   return tasks;
  // }
  //
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //
  //   const task: Task = {
  //     id: uuidv4(),
  //     title: title,
  //     description: description,
  //     status: TaskStatus.OPEN,
  //   };
  //
  //   this.tasks.push(task);
  //   return task;
  // }
  //
  // getTaskById(id: string): Task {
  //   const found = this.tasks.find((task) => task.id === id);
  //
  //   if (!found) {
  //     throw new NotFoundException(`${id} not found`);
  //   }
  //   return found;
  // }
  //
  // deleteTask(id: string): void {
  //   const found = this.getTaskById(id);
  //   this.tasks.filter((task) => task.id !== found.id);
  // }
  //
  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
