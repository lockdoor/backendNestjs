import { PrismaModule } from 'src/prisma/prisma.module';

import { Module } from '@nestjs/common';

import { TodoRepository } from './todo.repository';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './todo.dto';

@Module({
  imports: [PrismaModule],
  providers: [TodoRepository, TodoService, CreateTodoDto],
  exports: [TodoService, CreateTodoDto],
})
export class TodoModule {}
