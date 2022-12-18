import { io, Socket } from 'socket.io-client'
import { ref, Ref } from 'vue'
import Checklist from '../interfaces/interface.checklist'

const socketServer = ref<Socket>()
const connected = ref<boolean>(false)

export default () => {
  const _connect = () => {
    console.log('Connected')
    connected.value = true
  }

  const _disconnect = () => {
    console.log('Disconnected')
    connected.value = false
  }

  const _error = (error: any) => {
    console.error(error)
  }

  const disconnectFromServer = () => {
    if(socketServer.value){
      socketServer.value.disconnect()
      socketServer.value = undefined
    }
  }

  const connectToServer = () => {
    console.log("connecting")
    if(socketServer.value){
      return
    }

    socketServer.value = io('ws://[::1]:3004', {
      transports: ['websocket'],
      reconnectionDelay: 10000,
    })

    socketServer.value.on('connect', _connect)
    socketServer.value.on('disconnect', _disconnect)
    socketServer.value.on('error', _error)
  }

  const addUserToChecklist = (userIds: string[], checklistId: string, userId: string) => {
    if(userIds != null){
      const payload = {
        userIds: userIds,
        checklistId: checklistId,
        userId: userId
      }
      console.log("adding with payload ", payload)
      socketServer.value?.emit('checklist:adduser', payload)
    }
  }
  const listenToChecklist = () => {
    console.log('listening to checklist')
  }
  
  const updateChecklistSocket = (checklist:Checklist):Promise<Checklist> =>{
    socketServer.value?.emit('checklist:updateChecklist', checklist)
      socketServer.value?.emit('checklist:getchecklist', checklist)
      return new Promise((resolve, reject) => {
        resolve(checklist)
      })

  }

  const getChecklists = (data:Checklist): Promise<void> => {
    socketServer.value?.emit('checklist:getchecklist',data)
    return new Promise((resolve, reject) => {
      resolve()
    })
  }

  // const getChecklists = (checklists: any) => {
  //   console.log(checklists)
  // }
  // const getChecklist = (checklist: any) => {
  //   console.log(checklist)
  // }

  // const listenToChecklists = () => {
  //   console.log("listening to checklist")
  //   socketServer.value?.emit('checklist:getchecklists')
  // }

  return {
    connectToServer,
    disconnectFromServer,
   addUserToChecklist,
  //  listenToChecklists,
   updateChecklistSocket,
   listenToChecklist,
   getChecklists,
   socketServer,

   connected
  }
}
