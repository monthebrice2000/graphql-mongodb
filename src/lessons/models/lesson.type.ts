import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Lessons')
export class LessonType {
  @Field( type => ID )
  id: string;
  @Field()
  name: string;
  @Field()
  startDate: string;
  @Field()
  endDate: string;


}
