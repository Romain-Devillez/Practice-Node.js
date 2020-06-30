import {Controller, Get} from '@nestjs/common';
import {Course} from '../../../shared/course'
import {findAllCourses} from "../../db-data";

@Controller('/api/courses')
export class CoursesController
{

  @Get('/api/courses')
  async findAllCourses(): Promise<unknown[]> {
    return findAllCourses();
  }
}
