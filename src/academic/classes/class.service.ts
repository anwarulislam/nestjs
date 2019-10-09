import { Injectable } from '@nestjs/common';


@Injectable()
export class ClassService {
    constructor() { }

    async createClass(body) {
        return body
    }
}
