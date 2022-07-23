import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";
import { createUserDto } from "./dto/userCreate.dto";
import { updateUserDto } from "./dto/userUpdate.dto";
@Controller('/user')

export class UserController{
    
    constructor(private userService : UserService){}
    
    @Get()
    getUser(){
        return this.userService.getUsers(null);
    }

    @Get('/:userId')
    getOneUser(@Param() params:{userId: ParseIntPipe}){
        return this.userService.getUsers(params.userId);
    }

    @Post()
    saveUser(@Body() createUserDto : createUserDto){
        return this.userService.createUser(createUserDto);
    }
    
    @Patch('/:userId')
    updateUser(@Body() updateUserDto : updateUserDto, @Param() params: {userId : ParseIntPipe}){
        return this.userService.updateUser(updateUserDto, params) ;
    }

    @Delete('/:userId')
    deleteUser(@Param() params:{userId : ParseIntPipe}){
        return this.userService.deleteUser(params);
    }   

}