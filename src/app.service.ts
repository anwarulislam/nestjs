import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      app_name: 'ORFI',
      api_version: 1.0
    };
  }
}
