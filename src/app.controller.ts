import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo/todo.service';

@Controller()
export class AppController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/')
  ok() {
    return {
      ok: true,
    };
  }

  @Get('/todos')
  async findTodos() {
    return this.todoService.listTodos();
  }

  @Post('/todos')
  async createTodo(@Body() data: { title: string }) {
    const { title } = data;

    return this.todoService.createTodo({
      title,
    });
  }

  @Delete('/todos/:id')
  async deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo({ id: parseInt(id) });
  }
}
