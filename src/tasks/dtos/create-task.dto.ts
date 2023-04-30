import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  content: string;
}
