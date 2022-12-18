<template>
  <route-holder class="min-h-screen">
    <div
      v-if="createCarpool"
      class="absolute z-50 bottom-0 right-0 h-full w-full bg-white/70"
    >
      <form
        @submit.prevent="submitForm"
        class="bg-green100 text-green900 absolute top-[40%] left-[15%] right-[15%] md:left-1/3 md:right-1/3 lg:left-2/5 lg:right-2/5 rounded-xl p-4 shadow-lg"
      >
        <div class="flex justify-between">
          <h1 class="mb-2 text-2xl font-medium">{{$t('carpool.newCarpool')}}</h1>
          <X class="hover:cursor-pointer" v-on:click="createCarpool = false" />
        </div>
        <div class="mt-6">
          <div class="flex gap-1">
            <h2 class="text-xl">Driver:</h2>
            <input class="mb-2 text-xl bg-transparent"
                v-model="transportInput.driver"/>
          </div>
          <div class="flex text-lg items-center gap-2">
            <p>Seats:</p>
            <input
              type="number"
              v-model="transportInput.amountOfSeats"
              class="h-auto w-6 rounded-lg border-green-700 bg-transparent outline-none"
            />
          </div>
        </div>
        <div class="float-right mt-5">
          <button
            class="bg-greenPrimary hover:bg-green700 rounded-full py-1 px-4 text-white"
          >
            <p>Create</p>
          </button>
        </div>
      </form>
    </div>
    <div class="items-center">
      <RouterLink to="/trips" class="float-left absolute">
        <ArrowLeft class="h-10 w-10"/>
      </RouterLink>
      <h1
      class="font-theme flex justify-center text-4xl font-bold text-green-700"
      >
        Carpool
      </h1>

    </div>
    <!-- TODO: Limited carpools 4 -->
    <div class="flex justify-center">
      <ul
        :class="`mt-8 grid sm:grid-cols-${result?.transportsByChecklistId.length.toString()} items-center justify-center gap-8`"
        v-if="result?.transportsByChecklistId.length !== 0"
      >
        <li
          v-for="t of result?.transportsByChecklistId" v-bind:key="t.id"
          class="h-auto w-56 sm:w-44 rounded-xl bg-white p-4 shadow-lg"
        >
  
          <Trash2
            @click="deleteCarpool(t.id)"
            class="float-right flex text-red-600 hover:cursor-pointer hover:text-red-800"
          />
                  <h1>{{$t('carpool.driver')}}: {{ t.driver }}</h1>
          <p>{{$t('carpool.seats')}}: {{ t.amountOfSeats }}</p>
          <p>{{$t('carpool.passengers')}}:</p>
          <div class="flex">
            <div  v-if="t.people?.length == 0">
              <p class="text-neutral-500">Geen</p>
            </div>
            <Check
              v-if="
                t.people?.length == 0 &&
                t.driver != user?.displayName &&
                t.amountOfSeats > t.people.length
              "
              @click="addPassenger(t.id, t.people)"
              class="text-greenPrimary mr-0 ml-auto hover:cursor-pointer hover:text-green900"
            />
            <div v-for="p of t.people" class="grid grid-cols-1 items-center gap-1" :key="p.id">
              <p class="border-1 w-min border-greenPrimary rounded-2xl px-2">
                {{ p.name }}
              </p>
            </div>
  
            <div class="mr-0 ml-auto mb-0 mt-auto" v-for="p of t.people" :key="p.id">
              <X
                @click="deletePassenger(t.id)"
                v-if="p.uid == user?.uid"
                class="text-red-400 hover:cursor-pointer hover:text-red-600"
              />
              <!-- TODO: werkt dit? test met 3 accounts -->
              <Check
  
                v-else-if="(t.amountOfSeats > t.people.length)"
                @click="addPassenger(t.id, t.people)"
                class="text-greenPrimary hover:cursor-pointer hover:text-green900"
              />
            </div>
          </div>
        </li>
      </ul>
      <p v-else class="mt-6 text-center text-neutral-500">
        {{$t('carpool.noCarpools')}}
      </p>
      
    </div>

    <button
      @click="createCarpool = true"
      class="bg-greenPrimary hover:bg-green700 float-right mt-8 w-max rounded-full py-3 px-3"
    >
      <div class="flex p-1 font-semibold text-white">
        <Plus />
          <p class="pl-1">{{$t('carpool.createNew')}}</p>
      </div>
    </button>
  </route-holder>
</template>

<script lang="ts">
import { useMutation, useQuery } from '@vue/apollo-composable'
import { reactive, Ref, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import RouteHolder from '../../components/holders/RouteHolder.vue'
import { Transport } from '../../interfaces/interface.transport'
import { TRANSPORTSBYID } from '../../graphql/query.transport'
import useAuthentication from '../../composables/useAuthentication'
import useSocket from '../../composables/useSocket'
import { X, Trash2, Check, ArrowLeft } from 'lucide-vue-next'
import { User } from '../../interfaces/interface.user'
import { GET_USERS } from '../../graphql/query.user'
export default {
  components: {
    RouteHolder,
    X,
    Trash2,
    Check,
    ArrowLeft
  },
  setup() {
    const { params } = useRoute()
    const { user } = useAuthentication()
    const createCarpool = ref(false)

    const transportInput = reactive({
      checklistId: params.id,
      driver: user.value?.displayName,
      amountOfSeats: 4,
      people: [],
    })

    const { result: users } = useQuery<{
      users: User[]
    }>(GET_USERS)
    const { connectToServer, connected, disconnectFromServer, socketServer } =
      useSocket()

    connectToServer()

    watch(connected, () => {
      if (connected.value == false) {
        disconnectFromServer()
      } else {
        connectToServer()
        console.log('connection made ')
      }
    })

    socketServer.value?.on('transport:gettransports', (data: Transport[]) => {
      result.value = { transportsByChecklistId: data }
    })
    const addPassenger = async (
      id: string | undefined,
      people: User[] | undefined,
    ) => {
      let peoples = JSON.parse(JSON.stringify(people))
      for (let u of users.value?.users!) {
        if (u.uid == user.value?.uid) {
          peoples?.push(u)
        }
      }
      const data = {
        id: id,
        user: peoples,
        checklistId: params.id,
      }
      socketServer.value?.emit('transport:addPassenger', data)
      socketServer.value?.on('transport:gettransports', (data: Transport[]) => {
        result.value = { transportsByChecklistId: data }
      })
    }

    const deletePassenger = (id: string | undefined) => {
      const data = {
        id: id,
        uid: user.value?.uid,
        checklistId: params.id,
      }
      socketServer.value?.emit('transport:removePassenger', data)
      socketServer.value?.on('transport:gettransports', (data: Transport[]) => {
      })
    }

    // const buttonCreateCarpool = async () => {
    //   createCarpool.value = false
    //   socketServer.value?.emit('transport:createtransport', transportInput)
    //   socketServer.value?.emit('transport:gettransports', params.id)
    //   socketServer.value?.on('transport:gettransports', (data: Transport[]) => {
    //     result.value = { transportsByChecklistId: data }
    //   })

    // }
    const deleteCarpool = (id: string | undefined) => {
      socketServer.value?.emit('transport:deletetransport', id)
      socketServer.value?.emit('transport:gettransports', params.id)
      socketServer.value?.on('transport:gettransports', (data: Transport[]) => {

        result.value = { transportsByChecklistId: data }
      })
    }

    // const result:Ref<Transport[]> = ref([])
    const { result, error, loading } = useQuery<{
      transportsByChecklistId: Transport[]
    }>(TRANSPORTSBYID, {
      checklistId: params.id,
    })
    
    const submitForm = async () => {
      
      createCarpool.value = false
      socketServer.value?.emit('transport:createtransport', transportInput)
      socketServer.value?.emit('transport:gettransports', params.id)
      socketServer.value?.on('transport:gettransports', (data: Transport[]) => {
        result.value = { transportsByChecklistId: data }
      })
    }

    return {
      result,
      transportInput,
      createCarpool,
      user,
      users,
      // buttonCreateCarpool,
      deleteCarpool,
      addPassenger,
      deletePassenger,
      submitForm
    }
  },
}
</script>
