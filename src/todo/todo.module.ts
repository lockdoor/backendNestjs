import { PrismaModule } from 'src/prisma/prisma.module';

import { Module } from '@nestjs/common';

import { TodoRepository } from './todo.repository';
import { TodoService } from './todo.service';

@Module({
  imports: [PrismaModule],
  providers: [TodoRepository, TodoService],
  exports: [TodoService],
})
export class TodoModule {}
