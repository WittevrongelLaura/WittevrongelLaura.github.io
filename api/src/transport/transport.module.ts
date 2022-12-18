import { Module } from '@nestjs/common';
import { TransportService } from './transport.service';
import { TransportResolver } from './transport.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transport } from './entities/transport.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transport,User])],
  providers: [UsersService,TransportResolver, TransportService]
})
export class TransportModule {}
