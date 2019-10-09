import { Controller, Post, Body } from '@nestjs/common';
import { ClassService } from './class.service';

@Controller('class')
export class ClassController {
    constructor(private classService: ClassService) { }

    @Post('create')
    createClass(@Body() body) {
        return this.classService.createClass(body)
    }
}