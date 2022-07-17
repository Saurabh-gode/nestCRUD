import { Controller, Get } from "@nestjs/common";


@Controller({})

export class AppController{
    @Get('/user')
    getUser(){
        return {message: 'I am a user'};
    }
}