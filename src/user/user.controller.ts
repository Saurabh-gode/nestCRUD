import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('/user')

export class UserController{
    @Get()
    getUser(){
        return 'hey this is user';
    }
    
    @Get('/:userId')
    getOneUser(@Param() params:{userId: number}){
        return params;
    }

    @Post()
    saveUser(@Req() req:Request){
        return req.body;
    }
    
    @Patch('/:userId')
    updateUser(@Req() req:Request){
        return req.body;
    }

    @Delete('/:userId')
    deleteUser(@Param() params:{userId : number}){
        return params;
    }   

}