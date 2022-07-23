import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
@Module({
  imports:[UserModule ,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sql123',
      database: 'nestjs',
      entities: [User],
      synchronize: true,
    }),
  ]
})

export class AppModule{

}