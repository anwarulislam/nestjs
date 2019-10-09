import { Controller, Post, Body } from '@nestjs/common';
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
    async registerUser(@Body() body: any) {
        let response = await this.auth.register(body)
        return response
    }
}