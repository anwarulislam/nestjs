import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class CommonMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        if ((req.headers.host == 'localhost:4200')) {
            return next()
        }
        res.send({
            message: 'You are unauthenticated'
        })
    }
}