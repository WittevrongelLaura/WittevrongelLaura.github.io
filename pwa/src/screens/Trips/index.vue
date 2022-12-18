<template>
  <route-holder class="">
    <div class="max-h-screen w-full bg-white p-10 shadow-lg md:px-12">
      <!-- <div class="xl:px-16 xl:py-20 lg:px-10 lg:py-16 py-4 px-4"> -->
      <div class="my-3">
        <h1 class="font-theme text-lg font-bold md:mb-4 md:text-5xl">
          {{ $t('trips.titleTrips') }}
        </h1>
        <p class="text-xs md:text-base">{{ $t('trips.description') }}</p>
      </div>
      <!-- TODO:update skeleton -->
      <div class="mb-13 hidden w-full lg:table" v-if="loading">
        <table class="w-full table-auto">
          <tr>
            <th class="p-3 text-left">{{ $t('table.name') }}</th>

            <th class="p-3 text-left">{{ $t('table.description') }}</th>

            <th class="p-3">{{ $t('table.completed') }}</th>

            <th class="p-3">{{ $t('table.carpool') }}</th>

            <th class="p-3">{{ $t('table.share') }}</th>

            <th class="p-3">{{ $t('table.delete') }}</th>
          </tr>

          <tbody>
            <tr
              v-for="i of skeletons"
              :key="i"
              :class="i % 2 === 0 ? 'bg-green50' : ''"
              class="animate-pulse overflow-hidden rounded-md"
            >
              <td class="p-3">
                <div class="bg-neutral300 h-6 w-[56.5px] mr-[129.2px] rounded-md p-3"></div>
              </td>
              <td class="p-3">
                <div class="bg-neutral300 mr-[195.16px] h-6 w-20 rounded-md p-3"></div>
              </td>
              <td class="w-[277.11px] text-center">
                <div class="bg-neutral300 mx-auto h-6 w-9 rounded-md"></div>
              </td>

              <td class="w-[90.03px] text-center">
                <div class="bg-neutral300 mx-auto h-6 w-6 rounded-md"></div>
              </td>

              <td class="mt-[10px] w-[90px] text-center">
                <div class="bg-neutral300 mx-auto h-6 w-6 rounded-md"></div>
              </td>

              <td class="mt-[10px] w-[90px] text-center">
                <div class="bg-neutral300 mx-auto h-6 w-6 rounded-md"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-3" v-if="!loading">
        <ChecklistsTable
          v-if="resultByUid && !result"
          :checklists="resultByUid.checklistsByUserId"
        />
        <ChecklistsTable v-if="result" :checklists="result.checklists" />
      </div>

      <div v-if="!adminBool">
        <div v-if="loading" class="h-[35px] w-[220.5px]"></div>

        <div class="my-3">
          <h1 class="font-theme text-lg font-bold md:mb-4 md:text-5xl">
            {{ $t('trips.titleShared') }}
          </h1>
          <p class="text-xs md:text-base">{{ $t('trips.allShared') }}</p>
        </div>

        <div v-if="loadingShared">
          <table class="w-full table-auto">
            <tr>
              <th class="p-3 text-left">{{ $t('table.name') }}</th>

              <th class="p-3 text-left">{{ $t('table.description') }}</th>

              <th class="p-3">{{ $t('table.completed') }}</th>

              <th class="p-3">{{ $t('table.delete') }}</th>

              <th class="p-3">{{ $t('table.carpool') }}</th>
            </tr>

            <tbody>
              <tr
                v-for="i of skeletons"
                :key="i"
                :class="i % 2 === 0 ? 'bg-green50' : ''"
                class="animate-pulse overflow-hidden rounded-md"
              >
                <td class="w-[207.83px] p-3">
                  <p class="bg-neutral300 h-6 w-[56.5px] rounded-md"></p>
                </td>
                <td class="w-[312.07px] p-3">
                  <p class="bg-neutral300 h-6 w-20 rounded-md"></p>
                </td>
                <td class="flex w-[276.11px] justify-center text-center">
                  <div class="bg-neutral300 mt-[10px] h-6 w-9 rounded-md"></div>
                </td>

                <td class="w-[90.03px] text-center">
                  <div class="bg-neutral300 mx-auto h-6 w-6 rounded-md"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <ChecklistsTable
            v-if="resultShared"
            :checklists="resultShared.sharedChecklists"
            :shared="true"
          />
        </div>
      </div>
    </div>
    <!-- </div> -->
  </route-holder>
</template>

<script lang="ts">
import { useQuery } from '@vue/apollo-composable'
import RouteHolder from '../../components/holders/RouteHolder.vue'
import {
  CHECKLIST,
  CHECKLIST_BY_UID,
  SHARED_CHECKLISTS,
} from '../../graphql/query.checklist'
import ChecklistsTable from '../../components/checklist/ChecklistsTable.vue'
import { ref, Ref, watch } from 'vue'
import Checklist from '../../interfaces/interface.checklist'
import useSocket from '../../composables/useSocket'
import useAuthentication from '../../composables/useAuthentication'
import { User } from '../../interfaces/interface.user'

export default {
  components: {
    RouteHolder,
    ChecklistsTable,
  },

  setup() {
    const skeletons: Ref<number> = ref(2)
    const adminBool: Ref<boolean> = ref(false)
    let { result, loading } = useQuery(CHECKLIST)
    const { user } = useAuthentication()
    const { result: resultByUid } = useQuery(CHECKLIST_BY_UID)
    const { result: resultShared, loading: loadingShared } =
      useQuery(SHARED_CHECKLISTS)

    //SOCKET

    const { connectToServer, connected, disconnectFromServer, socketServer } =
      useSocket()

    connectToServer()

    watch(connected, () => {
      if (connected.value == false) {
        disconnectFromServer()
        console.log('disconnected')
      } else {
        connectToServer()
        console.log('connection made ')
      }
    })

    socketServer.value?.emit('checklist:getsharedchecklists', user.value?.uid)
    socketServer.value?.on(
      'checklist:getsharedchecklists',
      (data: Checklist[]) => {
        // console.log(data)
        resultShared.value = { sharedChecklists: data }
      },
    )

    // socketServer.value?.emit('checklist:getchecklists', user.value?.uid)
    socketServer.value?.on('checklist:getchecklists', (data: Checklist[]) => {
      // console.log(data)
      resultByUid.value = { checklistsByUserId: data }
    })

    // socketServer.value?.emit('user:getusers')
    socketServer.value?.on('user:getusers', (users: User[]) => {
      for (let u of users) {
        if (u.role === 'admin') {
          if (u.uid === user.value?.uid) {
            adminBool.value = true
          }
        }
      }
    })
    return {
      result,
      loading,
      resultByUid,
      skeletons,
      resultShared,
      loadingShared,
      adminBool,
    }
  },
}
</script>
