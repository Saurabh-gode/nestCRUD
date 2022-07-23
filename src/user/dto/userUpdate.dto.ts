import { IsNumber, IsString } from "class-validator";


export class updateUserDto {

    @IsString()
    name: string;

    @IsNumber()
    age: number;

    @IsString()
    password : string;
}
  
  