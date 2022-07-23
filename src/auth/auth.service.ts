import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';



@Injectable()
export class AuthService {

    constructor( 
        private userService : UserService, 
        private jwtService : JwtService
        ){}

    async validateUser(name: string, pass: string): Promise<any> {
        const user = await this.userService.findByName(name);
        // console.log(user);

        if(user && user.password === pass){
            return user;
        }
        return null;
    }

    async login(user : any){
        const payload = {name: user.name, sub: user.id}

        return {
            access_token : this.jwtService.sign(payload)
        };
    }
}
