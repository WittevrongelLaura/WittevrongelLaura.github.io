import { UsePipes, ValidationPipe } from '@nestjs/common'
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'

import { Server, Socket } from 'socket.io'
import { ChecklistService } from 'src/checklist/checklist.service'
import { UpdateChecklistInput } from 'src/checklist/dto/update-checklist.input'
import { Checklist } from 'src/checklist/entities/checklist.entity'
import { TransportService } from 'src/transport/transport.service'
import { UsersService } from 'src/users/users.service'

@WebSocketGateway(3004)
export class NotificationsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    private readonly checklistService: ChecklistService,
    private readonly transportService: TransportService,
    private readonly userService: UsersService) {}

  handleConnection(client: any, ...args: any[]) {
    this.numberOfClients++
    this.server.emit('user:newuserconnected', {
      connectedUsers: this.numberOfClients,
    })
    console.log('A user connected')
    console.log('Number of clients: ' + this.numberOfClients)
  }

  handleDisconnect(client: any) {
    this.numberOfClients--
    this.server.emit('users:userleaving', {
      connectedUsers: this.numberOfClients,
    })
    console.log('A client has left')
    console.log(`Number of clients: ${this.numberOfClients}`)
  }

  @WebSocketServer()
  server: Server

  numberOfClients: number = 0

  // @UsePipes(new ValidationPipe())
  // @SubscribeMessage('updateChecklist')
  // async handleChecklistUpdate(
  //   @MessageBody() data: UpdateChecklistInput,
  //   @ConnectedSocket() client: Socket,
  // ): Promise<Checklist> {
  //   console.log(data)
  //   return await this.checklistService.update(data)
  // }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!'
  }


  @SubscribeMessage('checklist:updateChecklist')
  async handleUpdateChecklist(@MessageBody() data: any): Promise<any> {
    await this.checklistService.update(data)
    console.log(data)
    console.log('updating checklist waarom')
    const checklist = await this.checklistService.findOne(data.id)

    // this.server.emit('checklist:getchecklist', checklist)
  }

  @SubscribeMessage('checklist:getsharedchecklists')
  async handleGetSharedChecklist(@MessageBody() data: any): Promise<any> {
    console.log("listening to checklist")
    console.log(data)
    const checklist = await this.checklistService.findAllBySharedUserIds(data)
    console.log(checklist)
    this.server.emit('checklist:getsharedchecklists', checklist)
    return Promise.resolve(checklist)
  }
  
  @SubscribeMessage('checklist:getchecklists')
  async handleGetChecklists(@MessageBody() data: any): Promise<any> {
    console.log("listening to checklists")
    console.log('---------- data')
    console.log(data)
    const checklists = await this.checklistService.findAllByUserId(data)
    console.log('---------- checklist')
    console.log(checklists)
    this.server.emit('checklist:getchecklists', checklists)
    return Promise.resolve(checklists)
  }
  
  @SubscribeMessage('checklist:getchecklist')
  async handleGetChecklist(@MessageBody() data: any): Promise<any> {
    console.log("listening to checklist")
    console.log(data)
    const checklist = await this.checklistService.findOne(data.id)
    console.log(checklist)
    this.server.emit('checklist:getchecklist', checklist)
    return Promise.resolve(checklist)
  }

  @SubscribeMessage('checklist:createchecklist')
  async handleCreateChecklists(@MessageBody() data: any): Promise<any> {
    console.log("create checklist")
    console.log(data)
    const checklist = await this.checklistService.create(data)
    console.log('---------- data')
    console.log(checklist)
    this.server.emit('checklist:getchecklist', checklist)
    return Promise.resolve(checklist)
  }

  @SubscribeMessage('checklist:deletechecklist')
  async handleDeleteChecklists(@MessageBody() id: string): Promise<any> {
    console.log("delete checklist")
    console.log('---------- data')
    console.log(id)
    await this.checklistService.remove(id[0])
    const checklist = await this.checklistService.findAllByUserId(id[1])
    this.server.emit('checklist:getchecklist', checklist)
    // console.log(checklist)
    return Promise.resolve(id)
  }
  @SubscribeMessage('checklist:updatesharedfriends')
  async handleUpdateSharedFriends(@MessageBody() data: any): Promise<any> {
    console.log("data ----------------------------------")
    console.log(data)
    console.log('updatesharedfriends')
    await this.checklistService.updateSharedUserIds(data.ids)
    const checklist = await this.checklistService.findAllByUserId(data.userId)

    this.server.emit('checklist:getchecklists', checklist)

  }
  // transport
  @SubscribeMessage('transport:gettransports')
  async handleGetTransport(@MessageBody() checklistId: any): Promise<any> {
    console.log("listening to transports")
    console.log('---------- data')
    console.log(checklistId)
    const transport = await this.transportService.findTransportsByChecklistId(checklistId)
    console.log('---------- transport')
    console.log(transport)
    this.server.emit('transport:gettransports', transport)
    return Promise.resolve(transport)
  }
  @SubscribeMessage('transport:createtransport')
  async handleCreateTransport(@MessageBody() data: any): Promise<any> {
    console.log("delete transport")
    console.log('---------- data')
    console.log(data)
    const transport = await this.transportService.create(data)
    console.log('---------- checklistId')
    console.log(transport.checklistId)
    console.log('---------- start get transports')
    this.server.emit('transport:gettransports', transport.checklistId)
    return Promise.resolve(transport)
  }
  @SubscribeMessage('transport:deletetransport')
  async handleDeleteTransport(@MessageBody() data: any): Promise<any> {
    console.log("delete transport")
    console.log('---------- data')
    console.log(data)
    const transport = await this.transportService.remove(data)
    // this.server.emit('transport:gettransports', data)
    return Promise.resolve(transport)
  }
  
  @SubscribeMessage('transport:addPassenger')
  async handleUpdatePassenger(@MessageBody() data: any): Promise<any> {
    const transport = await this.transportService.updatePassengers(data.id, data.user)
    const transports = await this.transportService.findTransportsByChecklistId(data.checklistId)
    this.server.emit('transport:gettransports', transports)
    return Promise.resolve(transport)
  }

  @SubscribeMessage('transport:removePassenger')
  async handleRemovePassenger(@MessageBody() data: any): Promise<any> {
    const transport = await this.transportService.removePassenger(data.id, data.user)
    const transports = await this.transportService.findTransportsByChecklistId(data.checklistId)
    console.log('---------- transports')
    console.log(transports)
    this.server.emit('transport:gettransports', transports)
    return Promise.resolve(transport)
  }

  // Users

  @SubscribeMessage('user:getusers')
  async handleGetUsers(@MessageBody() data: any): Promise<any> {
    console.log("listening to users")
    console.log('---------- data')
    console.log(data)
    const users = await this.userService.findAll()
    console.log('---------- users')
    console.log(users)
    this.server.emit('user:getusers', users)
    return Promise.resolve(users)
  }
  
}
