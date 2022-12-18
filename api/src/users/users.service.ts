import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ObjectId } from 'mongodb'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    return await this.userRepository.save(createUserInput)
  }

  findAll() {
    return this.userRepository.find()
  }

  findOne(id: string) {
    return this.userRepository.findOne(new ObjectId(id))
  }

  findOneBy(uid: string) {
    return this.userRepository.findOneBy({ uid })
  }

  findTemplateByUid(uid: string) {
    console.log(uid)
    console.log(this.userRepository.findOneBy({ uid }))

    return this.userRepository.findOneBy({ uid })
  }

  async update(updateUserInput: UpdateUserInput) {
    const update = await this.userRepository.findOneBy({
      uid: updateUserInput.uid,
    })

    if (update.templates == undefined) {
      update.templates = []
    }

    for (let i = 0; i < updateUserInput.templates.length; i++) {
      update.templates.push(updateUserInput.templates[i])
    }
    
    return this.userRepository.save(update)
  }

  remove(id: string) {
    return this.userRepository.delete(new ObjectId(id))
  }
}
