import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TransportService } from './transport.service';
import { Transport } from './entities/transport.entity';
import { CreateTransportInput } from './dto/create-transport.input';
import { UpdateTransportInput } from './dto/update-transport.input';
import { ClientMessage, MessageTypes } from '../bootstrap/entities/ClientMessage';
import { User } from 'src/users/entities/user.entity';

@Resolver(() => Transport)
export class TransportResolver {
  constructor(private readonly transportService: TransportService) {}

  @Mutation(() => Transport, {description: 'Create a transport using the transport DTO'})
  createTransport(@Args('createTransportInput') createTransportInput: CreateTransportInput):Promise<Transport> {
    return this.transportService.create(createTransportInput);
  }

  @Query(() => [Transport], { name: 'transports' })
  findAll(): Promise<Transport[]> {
    return this.transportService.findAll();
  }

  @Query(() =>[Transport], { name: 'transportsByChecklistId' })
  findTransportsByChecklistId(@Args('checklistId', { type: () => String }) checklistId: string): Promise<Transport[]> {
    return this.transportService.findTransportsByChecklistId(checklistId)
  }

  @Query(() => Transport, { name: 'transport' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Transport> {
    return this.transportService.findOne(id);
  }

  @Mutation(() => Transport)
  updateTransport(@Args('updateTransportInput') updateTransportInput: UpdateTransportInput): Promise<Transport> {
    return this.transportService.update(updateTransportInput);
  }

  @Mutation(()=> Transport)
  updatePassengers(@Args('id', { type: () => String }) id: string, @Args('users', { type: () => [User] }) users: User[]): Promise<Transport> {
    return this.transportService.updatePassengers(id, users)
  }

  @Mutation(() => Transport)
  removePassenger(@Args('id', { type: () => String }) id: string, @Args('uid', { type: () => String }) uid: string): Promise<Transport> {
    return this.transportService.removePassenger(id, uid)
  }

  @Mutation(() => ClientMessage)
  async removeTransport(@Args('id', { type: () => String }) id: string) {
    const deleted = await this.transportService.remove(id)

    if(deleted.affected <= 1)
      return {type: MessageTypes.success, message: 'Transport deleted', statusCode: 200}
    
    return {type: MessageTypes.error, message: 'Delete action went very wrong', statusCode: 400}
  
  }

  
  // @Mutation(() => ClientMessage)
  // async removeAllTransportByChecklistId(@Args('id', { type: () => String }) checklistId: string) {
  //   const deleted = await this.transportService.removeByChecklistId(checklistId)

  //   if(deleted.affected <= 1)
  //     return {type: MessageTypes.success, message: 'Transport deleted', statusCode: 200}
    
  //   return {type: MessageTypes.error, message: 'Delete action went very wrong', statusCode: 400}
    
  
  // }
}
