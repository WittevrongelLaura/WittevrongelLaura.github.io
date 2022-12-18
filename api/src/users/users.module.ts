import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Checklist } from 'src/checklist/entities/checklist.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  providers: [UsersResolver, UsersService]
})
export class UsersModule {}
