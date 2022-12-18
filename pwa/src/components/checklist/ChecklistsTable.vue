<template>
  <div
    v-if="clickShare"
    class="absolute bottom-0 right-0 z-50 h-full w-full bg-white/70"
  >
    <form
      @submit.prevent="submitForm"
      class="bg-green100 text-green900 lg:left-2/5 lg:right-2/5>>>>>> absolute top-[40%] left-[15%] right-[15%] rounded-xl p-4 shadow-lg md:left-1/3 md:right-1/3"
    >
      <div class="flex justify-between">
        <h1 class="mb-2 text-lg font-medium md:text-2xl">
          {{ $t('share.title') }}
        </h1>
        <X class="hover:cursor-pointer" v-on:click="clickShare = false" />
      </div>
      <div>
        <select
          v-on:change="addSharedFriend($event)"
          class="my-2 bg-transparent"
          name="cars"
          id="cars"
        >
          <option disabled selected value="Choose a friend">
            {{ $t('share.chooseFriend') }}
          </option>
          <option
            v-for="u of result.users"
            :value="JSON.stringify(u)"
            :key="u.id"
          >
            {{ u.name }}
          </option>
        </select>
      </div>
      <div>
        <p class="mb-1">{{ $t('share.sharingFriends') }}:</p>
        <ul v-for="c of checklistsList" class="flex gap-2" v-bind:key="c.id">
          <li v-if="c.id === checklistId" class="w-min items-center">
            <div v-for="s of c.sharedUserIds" v-bind:key="s">
              <div
                class="border-1 border-green900 flex gap-1 rounded-2xl px-2"
                v-if="s"
              >
                <p>
                  {{ GetNameOfUserId(s) }}
                </p>
                <X
                  class="w-3 pt-[2px] hover:cursor-pointer"
                  v-on:click="deleteSharedFriend(s)"
                />
              </div>
            </div>
            <div v-if="c.sharedUserIds?.length === 0">
              <div class="h-[26.23px]"></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="float-right">
        <button
          class="bg-greenPrimary hover:bg-green700 rounded-full py-1 px-4 text-white"
        >
          <p>{{ $t('table.share') }}</p>
        </button>
      </div>
    </form>
  </div>
  <table class="hidden w-full lg:table">
    <tr>
      <th class="p-3 text-left">{{ $t('table.name') }}</th>

      <th class="p-3 text-left">{{ $t('table.description') }}</th>

      <th class="p-3">{{ $t('table.completed') }}</th>

      <th class="p-3">{{ $t('table.carpool') }}</th>

      <th v-if="!shared" class="p-3">{{ $t('table.share') }}</th>

      <th v-if="!shared" class="p-3">{{ $t('table.delete') }}</th>
    </tr>

    <tbody v-if="checklists.length > 0">
      <tr
        v-for="(c, i) of checklists"
        :key="c.id"
        :class="i % 2 === 0 ? 'bg-green50' : ''"
        class="overflow-hidden rounded-md"
      >
        <td class="p-3">
          <RouterLink :to="`/trips/${c.id}`">
            <p v-if="containsWhiteSpace(c.name)">
              {{ c.name }}
            </p>

            <p v-else class="overflow-hidden truncate whitespace-nowrap">
              {{ c.name }}
            </p>
          </RouterLink>
        </td>
        <td class="p-3">
          <p class="max-w-50 overflow-hidden truncate whitespace-nowrap">
            {{ c.description }}
          </p>
        </td>
        <td class="text-center">
          <p>
            {{
              `${totalofItemsCheckedInCategory(
                c.categories,
              )}/${totalItemsInCategory(c.categories)}`
            }}
          </p>
        </td>
        <td class="w-[90px] text-center">
          <router-link class="" :to="`/carpool/${c.id}`">
            <button>
              <Car class="fh-8 w-8" />
            </button>
          </router-link>
        </td>

        <td v-if="!shared" class="mt-[10px] w-[90px] text-center">
          <button
            v-if="!shared"
            @click=";(clickShare = true), (checklistId = c.id)"
          >
            <Share2 />
          </button>
        </td>
        <td v-if="!shared" class="mt-[10px] w-[90px] text-center">
          <button @click="removeChecklist(c.id)" data-cy="deleteTrip">
            <Trash2 class="text-red-600 hover:text-red-800" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="grid w-full pl-3 text-left">
    <a
      v-if="!shared && !checklists"
      
      v-on:click="addChecklist()"
      class="text-neutral-500 hover:cursor-pointer"
      >{{ $t('trips.createNew') }}</a
    >
    <p v-else-if="shared && !checklists.sharedChecklists" class="text-neutral-500">{{ $t('trips.noShared') }}</p>
  </div>
  <div class="lg:hidden">
    <div
      v-for="c of checklists"
      :key="c.id"
      class="bg-green50 mb-4 rounded-md md:mx-24"
    >
      <div class="flex justify-between">
        <div class="p-3">
          <RouterLink :to="`/trips/${c.id}`">
            <p class="w-32 truncate whitespace-nowrap font-semibold">
              {{ c.name }}
            </p>
          </RouterLink>
          <p class="w-32 truncate whitespace-nowrap text-neutral-500">
            {{ c.description }}
          </p>
        </div>
        <p class="p-3 font-bold">
          {{
            `${totalofItemsCheckedInCategory(
              c.categories,
            )}/${totalItemsInCategory(c.categories)}`
          }}
        </p>
      </div>
      <div class="flex justify-end">
        <div class="flex items-center gap-2 p-3">
          <router-link class="" :to="`/carpool/${c.id}`">
            <button>
              <Car class="h-8 w-8" />
            </button>
          </router-link>
          <button
            v-if="!shared"
            @click=";(clickShare = true), (checklistId = c.id)"
          >
            <Share2 class="h-7 w-7" />
          </button>
          <button @click="removeChecklist(c.id)">
            <Trash2 class="h-7 w-7 text-red-600 hover:text-red-800" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <button
    v-if="!shared"
    data-cy="createChecklist"
    v-on:click="addChecklist()"
    class="bg-greenPrimary hover:bg-green700 mt-4 mb-8 ml-auto mr-0 flex w-max rounded-full md:py-3 md:px-3"
  >
    <div class="flex p-1 font-semibold text-white">
      <Plus class="h-8 w-8 md:h-6 md:w-6" />
      <p class="hidden pl-1 md:inline">{{ $t('trips.createNew') }}</p>
    </div>
  </button>
</template>

<script lang="ts">
import Category from '../../interfaces/interface.category'
import { Plus } from 'lucide-vue-next'
import { Share2 } from 'lucide-vue-next'

import { X, Car } from 'lucide-vue-next'
import Checklist from '../../interfaces/interface.checklist'
import { User } from '../../interfaces/interface.user'
import { Trash2 } from 'lucide-vue-next'
import { reactive, ref, Ref, watch } from 'vue'
import {
  provideApolloClient,
  useLazyQuery,
  useMutation,
  useQuery,
} from '@vue/apollo-composable'
import router from '../../bootstrap/router'
import { RouterLink } from 'vue-router'
import useAuthentication from '../../composables/useAuthentication'
import { GET_USERS } from '../../graphql/query.user'
import useSocket from '../../composables/useSocket'

export default {
  components: {
    Trash2,
    Plus,
    Share2,
    X,
    Car,
  },
  props: {
    checklists: {
      type: Array as () => any,
      required: true,
    },
    shared: {
      type: Boolean,
    },
  },

  setup(props) {
    const { result, loading, error } = useLazyQuery(GET_USERS)
    const checklistId: Ref<string | undefined> = ref('')
    const { user } = useAuthentication()
    const checklistsList: Ref<Checklist[] | undefined> = ref(props.checklists)
    const clickShare = ref(false)
    const tripInput = reactive({
      name: 'Untitled',
      description: 'Description...',
      userId: user.value?.uid,
      sharedUserIds: [],
      categories: [
        {
          name: 'Category',
          list: [
            {
              name: 'Item',
              check: false,
            },
          ],
        },
      ],
    })

    const containsWhiteSpace = (s: string) => {
      return /\s/g.test(s)
    }
    const { socketServer } = useSocket()
    const getChecklists = () => {
      socketServer.value?.emit('checklist:getchecklists', user.value?.uid)
      socketServer.value?.on('checklist:getchecklists', (data) => {
        checklistsList.value = data
      })
    }
    if (props.shared === false) {
      // GetUSERS
      socketServer.value?.emit('user:getusers')
      socketServer.value?.on('user:getusers', (users: User[]) => {
        for (let u of users) {
          if (u.role === 'admin') {
            users.splice(users.indexOf(u), 1)
          }
          if (u.uid === user.value?.uid) {
            users.splice(users.indexOf(u), 1)
          }
        }
        result.value = { users: users }
      })
      getChecklists()
    }
    const buttonAddSharedFriends = async () => {
      let ids
      for (let c of checklistsList.value!) {
        if (c.id === checklistId.value) {
          ids = c.sharedUserIds
        }
      }
      let data = {
        ids: {
          id: checklistId.value,
          sharedUserIds: ids,
        },
        userId: user.value?.uid,
      }

      socketServer.value?.emit('checklist:updatesharedfriends', data)
      clickShare.value = false
    }
    const deleteSharedFriend = (friend: string) => {
      checklistsList.value = JSON.parse(JSON.stringify(checklistsList.value))
      for (let c of checklistsList.value!) {
        c.sharedUserIds = c.sharedUserIds?.filter((id) => friend !== id)
      }
    }

    const GetNameOfUserId = (id: string) => {
      const user = result.value?.users.find((u: any) => u.uid === id)
      return user?.name
    }

    const addSharedFriend = (e: any) => {
      const u = JSON.parse(e.target.value)
      checklistsList.value = JSON.parse(JSON.stringify(checklistsList.value))
      for (let c of checklistsList.value!) {
        if (!c.sharedUserIds?.includes(u.uid)) {
          c.sharedUserIds!.push(u.uid)
        }
      }
    }
    const totalofItemsCheckedInCategory = (result: Category[] | undefined) => {
      let total = 0
      if (result != undefined) {
        for (let i = 0; i < result!.length; i++) {
          for (let j = 0; j < result![i].list.length; j++) {
            if (result![i].list[j].check) {
              total += 1
            }
          }
        }
      }
      return total
    }
    const totalOfSharedIds = (result: string[] | undefined) => {
      let total = 0
      for (let i = 0; i < result!.length; i++) {
        total += 1
      }
      return total
    }

    const totalItemsInCategory = (result: Category[] | undefined) => {
      let total = 0
      if (result != undefined) {
        for (let i = 0; i < result!.length; i++) {
          total += result![i].list.length
        }
      }
      return total
    }

    const addChecklist = async () => {
      socketServer.value?.emit('checklist:createchecklist', tripInput)
      socketServer.value?.on(
        'checklist:getchecklist',
        (checklist: Checklist) => {
          checklistId.value = checklist.id
          if (checklist.id) {
            router.push(`/trips/${checklist.id}`)
          }
        },
      )
    }
    const removeChecklist = async (id: string | undefined) => {
      socketServer.value?.emit('checklist:deletechecklist', id, user.value!.uid)
      getChecklists()
    }

    const submitForm = async () => {
      let ids
      for (let c of checklistsList.value!) {
        if (c.id === checklistId.value) {
          ids = c.sharedUserIds
        }
      }
      let data = {
        ids: {
          id: checklistId.value,
          sharedUserIds: ids,
        },
        userId: user.value?.uid,
      }

      socketServer.value?.emit('checklist:updatesharedfriends', data)
      clickShare.value = false
    }

    return {
      checklistId,
      clickShare,
      result,
      checklistsList,
      getChecklists,
      addSharedFriend,
      deleteSharedFriend,
      buttonAddSharedFriends,
      totalOfSharedIds,
      GetNameOfUserId,
      totalofItemsCheckedInCategory,
      totalItemsInCategory,
      removeChecklist,
      addChecklist,
      containsWhiteSpace,
      submitForm,
    }
  },
}
</script>
