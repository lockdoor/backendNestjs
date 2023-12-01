import { PrismaService } from '../prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';

type CreateTodoParams = {
  data: Prisma.TodoCreateInput;
};

type FindTodo = {
  where: Prisma.TodoWhereUniqueInput;
};

@Injectable()
export class TodoRepository {
  constructor(private prisma: PrismaService) {}

  async createTodo(params: CreateTodoParams): Promise<Todo> {
    const { data } = params;
    return this.prisma.todo.create({ data });
  }

  async listTodos(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async deleteTodo(params: FindTodo): Promise<Todo> {
    const { where } = params;
    return this.prisma.todo.delete({ where });
  }
}
