import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ChecklistService } from './checklist.service'
import { Checklist } from './entities/checklist.entity'
import { CreateChecklistInput } from './dto/create-checklist.input'
import {
  RemoveTransportIds,
  UpdateChecklistIds,
  UpdateChecklistInput,
} from './dto/update-checklist.input'
import { UseGuards } from '@nestjs/common'
import {
  ClientMessage,
  MessageTypes,
} from '../bootstrap/entities/ClientMessage'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { FirebaseGuard } from 'src/auth/guards/firebase.guards'
import { RolesGuard } from 'src/auth/guards/role.guard'
import { NotificationsGateway } from 'src/notifications/notifications.gateway'
import { TransportService } from 'src/transport/transport.service'

@Resolver(() => Checklist)
export class ChecklistResolver {
  constructor(
    private readonly checklistService: ChecklistService,
    private readonly transportService: TransportService,
  ) {}

  @Mutation(() => Checklist, { description: 'Create a new checklist' })
  async createChecklist(
    @Args('createChecklistInput') createChecklistInput: CreateChecklistInput,
  ): Promise<Checklist> {
    return this.checklistService.create(createChecklistInput)
  }

  @UseGuards(FirebaseGuard, RolesGuard(['admin']))
  @Query(() => [Checklist], { name: 'checklists' })
  findAll(): Promise<Checklist[]> {
    return this.checklistService.findAll()
  }

  @UseGuards(FirebaseGuard, RolesGuard(['user']))
  @Query(() => [Checklist], { name: 'checklistsByUserId' })
  findAllByUserId(@CurrentUser() user): Promise<Checklist[]> {
    return this.checklistService.findAllByUserId(user.uid)
  }

  @UseGuards(FirebaseGuard, RolesGuard(['user']))
  @Query(() => [Checklist], { name: 'sharedChecklists' })
  findAllBySharedUserIds(@CurrentUser() user): Promise<Checklist[]> {
    return this.checklistService.findAllBySharedUserIds(user.uid)
  }

  // @UseGuards(FirebaseGuard)
  // @Query(() => [Checklist], { name: 'checklists' })
  // findAll(@CurrentUser() user, @Args('role') role:string): Promise<Checklist[]> {
  //   let list = []
  //   console.log(user)
  //   console.log(role)
  //   if (role === 'admin') return this.checklistService.findAll()

  //   return this.checklistService.findAll().then((res) => {
  //     // console.log(res)
  //     for (const checklist of res) {
  //       if (checklist.userId === user.uid) {
  //         list.push(checklist)
  //       }
  //     }
  //     return list
  //   })

  // }

  @Query(() => Checklist, { name: 'checklist' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Checklist> {
    return this.checklistService.findOne(id)
  }

  @Mutation(() => Checklist)
  updateSharedUserIds(
    @Args('updateChecklistIds') updateChecklistIds: UpdateChecklistIds,
  ): Promise<Checklist> {
    return this.checklistService.updateSharedUserIds(updateChecklistIds)
  }

  @Mutation(() => Checklist)
  async updateChecklist(
    @Args('updateChecklistInput') updateChecklistInput: UpdateChecklistInput,
  ): Promise<Checklist> {
    return this.checklistService.update(updateChecklistInput)  
  }

  @UseGuards(FirebaseGuard)
  @Mutation(() => ClientMessage)
  async removeChecklist(
    @Args('id', { type: () => String }) data: RemoveTransportIds,
  ): Promise<ClientMessage> {
    const deletedChecklist = await this.checklistService.remove(data.id)
    const transports = await this.transportService.findTransportsByChecklistId(data.checklistId)
    for (const transport of transports) {
      await this.transportService.remove(transport.id)
    }
    // const deleteTransport = await this.transportService.removeByChecklistId(data.checklistId)
    if (deletedChecklist.affected <= 1)
      return {
        type: MessageTypes.success,
        message: 'Checklist deleted',
        statusCode: 200,
      }

    return {
      type: MessageTypes.error,
      message: 'Delete action went very wrong.',
      statusCode: 400,
    }
  }
}
