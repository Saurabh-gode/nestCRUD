import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { createUserDto } from "./dto/userCreate.dto";
import { updateUserDto } from "./dto/userUpdate.dto";
import { User } from "./entity/user.entity";

@Injectable()

export class UserService{
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}
 
    getUsers(userId){
        if(!userId){
            return this.userRepository.find();
        }
        return this.userRepository.findOne({where:{id : userId}});
    }

    createUser(createUserDto : createUserDto){
        return this.userRepository.save(createUserDto);
    }

    updateUser(updateUserDto: updateUserDto ,userId){
        console.log(userId);
        return this.userRepository.update({id: userId.userId}, updateUserDto);
    }

    deleteUser(userId){
       
        return this.userRepository.delete(userId.userId);
    }


    findByName(name : string){
        return this.userRepository.findOne({where:{name : name}})
    }
}