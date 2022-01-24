import {
  AfterInsert,
  BeforeInsert,
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as uuid from 'uuid';

@Entity('Lessons')
export class LessonEntity {

  @ObjectIdColumn()
  _id: string;

  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  startDate: string;
  @Column()
  endDate: string;
  @BeforeInsert()
  save(){
    this.id = uuid.v4();
    console.log('Insert New or Update Lesson')
  }

}
