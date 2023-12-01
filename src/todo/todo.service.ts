import { Injectable } from '@nestjs/common';
import { TodoRepository } from './todo.repository';
import { Todo } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private repository: TodoRepository) {}

  async createTodo(params: { title: Todo['title'] }) {
    const { title } = params;

    const todo = await this.repository.createTodo({
      data: {
        title,
      },
    });

    return todo;
  }

  async listTodos() {
    const todos = await this.repository.listTodos();
    return todos;
  }

  async deleteTodo(params: { id: Todo['id'] }) {
    const { id } = params;

    const removedTodo = await this.repository.deleteTodo({
      where: {
        id,
      },
    });

    return removedTodo;
  }
}
