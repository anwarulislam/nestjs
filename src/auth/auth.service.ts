import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async register(body) {
        try {
            let user = await Buffer.from(body.user, 'base64').toString()
            let username = user[0]
            let password = user[1]

            if (username && username == 'a') {

            }
        } catch (error) {
            throw error
        }
    }
}
