import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessonEntity } from '@models/lesson.entity';
import { LessonsRepository } from '@repositories/lessons.repository';
import { Lesson } from '@models/lesson.interface';

@Injectable()
export class LessonsService {

  constructor(
    @InjectRepository(LessonEntity)
    private readonly lessonsRepository: LessonsRepository
  ){}

  async createLesson( lesson : Lesson ) : Promise<Lesson> {
    const lessonCreated = await this.lessonsRepository.create( { ...lesson } );
    return await this.lessonsRepository.save( lessonCreated );
  }

  async findLesson( lesson : Lesson ): Promise<Lesson> {
    return await this.lessonsRepository.findOne( lesson.id )
  }

}
