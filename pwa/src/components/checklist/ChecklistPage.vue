<template>
  <div v-if="loading">
    <p>Loading</p>
  </div>
  <!-- <div v-else-if="error">
    <p>Error happened.</p>
  </div> -->

  <form
    class="xl:px-32 xl:py-20 md:px-16 md:my-10"
    @submit.prevent="submitForm"
    v-on:change="
      ;(checklistId = result?.checklist.id ? result?.checklist.id : ''),
        changed()
    "
  >
    <div class="mb-6 text-left text-neutral-500">
      <p>{{ $t('trips.created') }}: {{ date(result?.checklist.createdAt!) }}</p>
      <p>{{ $t('trips.updated') }}: {{ date(result?.checklist.updatedAt!) }}</p>
    </div>
    <div class="mb-3">
      <input
        :class="
          TripErrors.name ? 'rounded-2xl border-red-500 ring ring-red-500' : ''
        "
        v-model="tripInput.name"
        type="text"
        class="text-5xl font-bold outline-none"
        data-cy="tripName"
      />
    </div>
    <input
      v-model="tripInput.description"
      :class="
        TripErrors.description
          ? 'rounded-2xl border-red-500 ring ring-red-500'
          : ''
      "
      type="text"
      class="mb-4 w-full text-xl text-neutral-500 focus-within:outline-none"
      data-cy="tripDescription"
    />
    <div v-if="tripInput.categories.length > 0">
      <div v-for="c of tripInput.categories" :key="c.id">
        <input
          class="mb-3 font-medium focus-within:outline-none"
          data-cy="tripCategory"
          type="text"
          v-model="c.name"
          :class="
            TripErrors.name
              ? 'rounded-2xl border-red-500 ring ring-red-500'
              : ''
          "
        />
        <ul v-for="l of c.list" v-bind:key="l.id">
          <li class="ml-4 flex">
            <div class="mb-4 flex items-center">
              <!-- TODO: Custom checkbox -->
              <input
                type="checkbox"
                data-cy="checkbox"
                class="accent-green700 h-4 w-4"
                v-model="l.check"
              />
              <input
                type="text"
                class="border-b-1 ml-2 border-b-neutral-300 outline-none"
                v-model="l.name"
                data-cy="tripTask"
              />
              <div
                v-if="isItemTheLastOneOfTheList(c.list, l)"
                class="ml-2"
                @mouseover=";(hover = true), (categoryName = c.name)"
                @mouseleave="hover = false"
              >
                <div class="">
                  <Plus class="z-10 self-baseline hover:cursor-pointer"></Plus>
                </div>
                <div
                  v-if="checkHover(c.name)"
                  class="border-1 absolute z-20 w-40 rounded-md border bg-white"
                >
                  <ul class="p-2">
                    <li>
                      <button @click="addTask(c.name)">
                        <p>{{ $t('trips.addTask') }}</p>
                      </button>
                    </li>
                    <li>
                      <button @click="addSubHeading()">
                        <p>{{ $t('trips.addSubheading') }}</p>
                      </button>
                    </li>
                    <li class="text-left">
                      <select
                        name="template"
                        id="template"
                        class="-ml-1"
                        v-on:change="addTemplate($event)"
                      >
                        <option value="Add template" class="" selected disabled>
                          {{ $t('trips.addTemplate') }}
                        </option>
                        <option
                          v-for="t of resultUser?.findByUid.templates"
                          :value="JSON.stringify(t)"
                        >
                          {{ t.name }}
                        </option>
                        <!-- <option value="">Template 1</option>
                        <option value="">Template 1</option> -->
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <button
      class="bg-greenPrimary hover:bg-green700 mt-6 flex flex-1 w-full items-center justify-center rounded-md py-2 px-3 text-white outline-none ring-neutral-300 focus-visible:ring"
      :disabled="loading"
      data-cy="saveTrip"
    >
      <span v-if="!loading">{{ $t('trips.save') }}</span>
      <div v-else>
        <Loader2 class="animate-spin" />
      </div>
    </button>
  </form>
</template>

<script lang="ts">
import {
  provideApolloClient,
  useMutation,
  useQuery,
} from '@vue/apollo-composable'
import { getCurrentInstance, reactive, ref, Ref, watch } from 'vue'
import { CHECKLIST, CHECKLIST_BY_ID } from '../../graphql/query.checklist'
import { Loader2 } from 'lucide-vue-next'
import RouteHolder from '../holders/RouteHolder.vue'
import { Plus } from 'lucide-vue-next'
import Checklist from '../../interfaces/interface.checklist'
import { useRoute, useRouter } from 'vue-router'
import useSocket from '../../composables/useSocket'
import { GET_USER_BY_UID } from '../../graphql/query.user'
import { User } from '../../interfaces/interface.user'
import useAuthentication from '../../composables/useAuthentication'

export default {
  props: {
    checklist: {
      type: Object as () => Checklist,

      required: false,
    },
  },
  components: {
    RouteHolder,
    Plus,
    Loader2,
  },

  setup(props) {
    const { params } = useRoute()
    const { push } = useRouter()
    const { user } = useAuthentication()

    const { result: resultUser } = useQuery<{ findByUid: User }>(
      GET_USER_BY_UID,
      {
        uid: user?.value?.uid,
      },
    )
    console.log(resultUser)
    const { result, error } = useQuery<{ checklist: Checklist }>(
      CHECKLIST_BY_ID,
      {
        id: params.id,
      },
    )
    const loading: Ref<boolean> = ref(false)
    const errorMessage: Ref<string> = ref('')
    const checklistId: Ref<string> = ref('')
    const TripErrors = reactive({
      name: '',
      userId: '',
      description: '',
      categories: '',
    })
    const hover = ref(false)
    const categoryName = ref('')
    const date = (date: Date | undefined) => {
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
      const month = monthNames[new Date(date!).getMonth()]
      const dateTime =
        month +
        ' ' +
        new Date(date!).getDate() +
        ', ' +
        new Date(date!).getFullYear()

      return dateTime
    }

    const isItemTheLastOneOfTheList = (list: any[], item: any) => {
      return list.indexOf(item) === list.length - 1
    }
    const addTask = (name: string) => {
      const index = tripInput.categories.findIndex((c: any) => c.name === name)
      tripInput.categories[index].list.push({ name: '', check: false })
    }

    const addSubHeading = () => {
      tripInput.categories?.push({
        name: 'Sub-Heading',
        list: [{ name: '', check: false }],
      })
    }

    const addTemplate = (e:any) => {
      console.log(e.target.value)
      const u = JSON.parse(e.target.value)
      console.log(u)
      console.log(tripInput)
      delete u['id']
      let list = []
      for (let i in u.items){
        list.push({name: u.items[i], check: false})
      }
      console.log(list)
      tripInput.categories.push({name: u.name, list: list})
      // tripInput.categories.push([{name: u.name, list: list}])
      // console.log(tripInput)
    }

    const checkHover = (string: string) => {
      if (hover.value) {
        if (string === categoryName.value) {
          return true
        }
      }
    }
    // console.log(props.checklist)
    const listInput = reactive(
      JSON.parse(JSON.stringify(props.checklist?.categories)),
    )

    const tripInput = reactive({
      id: props.checklist!.id,
      name: props.checklist!.name,
      userId: props.checklist!.userId,
      description: props.checklist!.description,
      categories: listInput,
    })

    const { connected, socketServer } = useSocket()

    const changed = async () => {
      tripInput.id = checklistId.value
      if (connected.value == true) {
        if (isFormInvalid()) return

        socketServer.value?.emit('checklist:updateChecklist', tripInput)
      }
    }
    socketServer.value?.on('checklist:getchecklist', (data: Checklist) => {
      tripInput.name = data.name
      tripInput.description = data.description
      tripInput.categories = data.categories
    })

    const isFormInvalid = () => {
      let hasSomeErrors = false

      if (tripInput.name === '') {
        TripErrors.name = 'Name is required'
        hasSomeErrors = true
      } else {
        TripErrors.name = ''
      }

      if (tripInput.description === '') {
        TripErrors.description = 'Description is required'
        hasSomeErrors = true
      } else {
        TripErrors.description = ''
      }

      if (tripInput.categories.length === 0) {
        TripErrors.categories = 'Categories is required'
        hasSomeErrors = true
      } else {
        TripErrors.categories = ''
      }

      if (tripInput.userId === '') {
        TripErrors.userId = 'User is required'
        hasSomeErrors = true
      } else {
        TripErrors.userId = ''
      }

      return hasSomeErrors
    }

    const submitForm = async () => {
      if (isFormInvalid()) return

      socketServer.value?.emit('checklist:updateChecklist', tripInput)
      push('/trips')
    }

    watch(tripInput, () => isFormInvalid())

    return {
      tripInput,
      loading,
      errorMessage,
      checklistId,
      hover,
      categoryName,
      result,
      TripErrors,
      listInput,
      resultUser,
      submitForm,
      checkHover,
      addSubHeading,
      addTask,
      isItemTheLastOneOfTheList,
      date,
      changed,
      addTemplate,
    }
  },
}
</script>
