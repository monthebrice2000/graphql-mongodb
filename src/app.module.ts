import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonsModule } from '@modules/lessons.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonEntity } from '@models/lesson.entity';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: 'monthe',
      password: 'monthe',
      database: 'school-db',
      useUnifiedTopology: true,
      synchronize: true,
      logging: 'all',
      logger: 'advanced-console',
      autoLoadEntities: true,
      entities: [ LessonEntity ]
    }),
    LessonsModule
  ],
  controllers: [ ],
  providers: [ ],
})
export class AppModule {}
