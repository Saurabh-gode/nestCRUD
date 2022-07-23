import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"; 

@Entity()
export class AuthUser{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    age :number;

    @Column()
    password : string;
    
}