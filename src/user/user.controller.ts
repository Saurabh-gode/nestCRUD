import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { createUserDto } from "./dto/userCreate.dto";
import { updateUserDto } from "./dto/userUpdate.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller('/user')

export class UserController{
    
    constructor(private userService : UserService){}
    
    @UseGuards(AuthGuard('jwt'))
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