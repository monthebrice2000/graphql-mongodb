import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty } from 'class-validator';

@InputType()
export class LessonDto{
  @Field()
  @IsNotEmpty()
  name:string;
  @Field()
  @IsDateString()
  @IsNotEmpty()
  startDate: string;
  @Field()
  @IsDateString()
  @IsNotEmpty()
  endDate: string;
}