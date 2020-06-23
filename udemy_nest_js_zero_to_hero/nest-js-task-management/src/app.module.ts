import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeOrmConfig} from "./config/typeorm.config";
import { TodosModule } from './todos/todos.module';


@Module({
  imports:
    [
        TypeOrmModule.forRoot(typeOrmConfig),
        TasksModule,
        TodosModule
    ]
})

export class AppModule {}
