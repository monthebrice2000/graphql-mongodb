import { Module } from '@nestjs/common';
import { LessonsResolver } from '@resolvers/lessons.resolver';
import { LessonsService } from '@services/lessons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonEntity } from '@models/lesson.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ LessonEntity ])
  ],
  providers: [LessonsResolver, LessonsService]
})
export class LessonsModule {}
