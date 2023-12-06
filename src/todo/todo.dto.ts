import { Injectable } from '@nestjs/common';
import { IsNotEmpty, IsString } from 'class-validator';

@Injectable()
export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;
}
