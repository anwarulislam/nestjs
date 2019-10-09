import { Module, MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

import { MongooseModule } from '@nestjs/mongoose'
import { CommonMiddleware } from './core/middlewares/common.middleware';
import { AuthController } from './auth/auth.controller';
import { AcademicModule } from './academic/academic.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot(
      'mongodb://localhost:27017/orfi', { useNewUrlParser: true, useUnifiedTopology: true }
    ),
    AcademicModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CommonMiddleware)
      .forRoutes({ path: '', method: RequestMethod.GET }, AuthController);
  }
}