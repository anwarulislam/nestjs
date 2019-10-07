import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private auth: AuthService) {

    }

    @Post('/login')
    getHello() {
        return [
            {
                name: 'Abul',
                father: 'Kabul',
                age: 'Bura'
            },

            {
                name: 'Aaam',
                father: 'Jaaam',
                age: 'Jowan'
            }
        ]
    }

    @Post('/register')
    registerUser() {
        return this.auth.register()
    }
}