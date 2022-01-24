import { EntityRepository, Repository } from 'typeorm';
import { LessonEntity } from '@models/lesson.entity';

@EntityRepository(LessonEntity)
export class LessonsRepository extends Repository<LessonEntity> {}
