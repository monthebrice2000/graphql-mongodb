import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from '@models/lesson.type';
import { LessonsService } from '@services/lessons.service';
import { LessonDto } from '@models/lesson.dto';

@Resolver( of => LessonType)
export class LessonsResolver {

  constructor(
    private readonly lessonsService: LessonsService
  ){}

  @Query( returns => LessonType )
  async lesson( @Args('id') id : string ){
    return await this.lessonsService.findLesson( { id });
  }



  @Mutation( returns => LessonType)
   async createLesson(
     @Args('lesson') lessonDto: LessonDto
   ){
    return await this.lessonsService.createLesson( { ...lessonDto });
   }
}
