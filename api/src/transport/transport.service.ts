import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import {ObjectId} from 'mongodb'
import { CreateTransportInput } from './dto/create-transport.input';
import { UpdateTransportInput } from './dto/update-transport.input';
import { Transport } from './entities/transport.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TransportService {
  constructor(
    @InjectRepository(Transport)
    private readonly transportRepository: Repository<Transport>,
    private readonly userService: UsersService,
  ){}

  create(createTransportInput: CreateTransportInput): Promise<Transport> {
    const t = new Transport()
    // t.name = createTransportInput.name
    t.driver = createTransportInput.driver
    t.checklistId = createTransportInput.checklistId
    t.amountOfSeats = createTransportInput.amountOfSeats
    t.people = createTransportInput.people

    return this.transportRepository.save(t)
  }

  findAll(): Promise<Transport[]> {
    return this.transportRepository.find()
  }

  findTransportsByChecklistId(checklistId: string): Promise<Transport[]> {
    return this.transportRepository.find({where: {checklistId}})
  }

  findOne(id: string): Promise<Transport> {
    return this.transportRepository.findOne(new ObjectId(id))
  }

  update(updateTransportInput: UpdateTransportInput) {
    const update = new Transport()
    update.id = new ObjectId(updateTransportInput.id)
    // update.name = updateTransportInput.name
    update.amountOfSeats = updateTransportInput.amountOfSeats
    update.people = updateTransportInput.people
    return this.transportRepository.save(update)
  }

  async updatePassengers(id: string, users: User[]): Promise<Transport> {
    const  update = new Transport()
    update.id = new ObjectId(id)
    update.people = users
    return this.transportRepository.save(update)
  }

  removePassenger(id: string, uid: string): Promise<Transport> {
    return this.transportRepository.findOne(new ObjectId(id)).then((transport) => {
      const update = new Transport()
      update.id = new ObjectId(id)
      update.people = transport.people.filter((user) => user.uid == uid)
      console.log('update', update)
      return this.transportRepository.save(update)
    })
  }

  remove(id: string): Promise<DeleteResult> {
    return this.transportRepository.delete(new ObjectId(id))
  }
  // removeByChecklistId(id: string): Promise<DeleteResult> {
  //   return this.transportRepository.delete({checklistId: id})
  // }
}
