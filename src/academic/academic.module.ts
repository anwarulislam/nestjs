import { Module } from '@nestjs/common';
import { ClassController } from './classes/class.controller';
import { ClassService } from './classes/class.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassSchema } from './classes/class.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'classes', schema: ClassSchema }])
    ],
    controllers: [ClassController],
    providers: [ClassService]
})
export class AcademicModule { }
