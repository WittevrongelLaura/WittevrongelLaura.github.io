<template>
  <div class="flex justify-center">
    <!-- <route-holder
      :title="`Hi, ${user?.displayName}`"
      class="mx-40 my-10 w-[1190px] bg-white p-40 shadow-lg"
    > -->
    <route-holder class="mx-40 my-10 w-[1190px] bg-white p-40 shadow-lg">
      <div class="px-32 py-20">
        <div class="flex justify-between items-baseline">
          <h1 class="font-theme mb-4 text-5xl font-bold">
            Hi, {{ user?.displayName }}
          </h1>
          <button
            class="bg-green700 hover:bg-green900 flex items-center gap-3 rounded-lg py-1 px-4 text-lg font-bold text-white"
            @click="handleLogOut"
          >
          <p>{{ $t('account.logout') }}</p>
          <LogOut />
          </button>
        </div>
        <div class="mt-4 sm:mt-8 flex gap-4">
          <label for="language" class="block">{{
            $t('account.language')
          }}</label>
          <select
            class="border-1 block rounded-md border-gray-300 bg-transparent"
            name="language"
            id="language"
            @change="setLanguage($event)"
          >
            <option
              v-for="l of AVAILABLE_LANGUAGES"
              :value="l.code"
              :key="l.code"
            >
              {{ l.label }}
            </option>
          </select>
        </div>

        <div>
          <h1 class="font-theme mt-18 mb-8 sm:text-xl">
            {{ $t('account.boughtChecklists') }}:
          </h1>
          <div v-if="result" class="flex flex-col gap-12">
            <div v-if="result.findTemplateByUid.templates">
              <div
                v-for="t of result.findTemplateByUid.templates"
                :key="t.id"
                class="pb-8"
              >
                <div class="bg-green50 p-4 shadow-sm">
                  <h3 class="text-xl">{{ t.name }}</h3>
                  <!-- <ul class="mb-8">
                  <li v-for="i of t.items" :key="i.id">
                    <input type="checkbox" name="item" id="item" />
                    <label class="pl-4">{{ i }}</label>
                  </li>
                </ul> -->
                </div>
              </div>
            </div>
            <div v-else-if="result.findTemplateByUid.templates == null">
              <p class="mb-8 text-neutral-500 sm:text-lg">
                {{ $t('account.noChecklists') }}...
              </p>
              <a href="/templates" class="text-green500 underline sm:text-lg">{{
                $t('account.buySome')
              }}</a>
            </div>
          </div>
          <div
            v-else
            class="border-1 rounded-lg border-red-600 bg-red-200 p-4 text-red-600"
          >
            <p>{{$t('templates.retrieveError')}}</p>
          </div>
        </div>
      </div>
    </route-holder>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import { watch } from '@vue/runtime-core'
import { LogOut } from 'lucide-vue-next'
import { computed } from '@vue/reactivity'
import RouteHolder from '../components/holders/RouteHolder.vue'
import useAuthentication from '../composables/useAuthentication'
import useCustomUser from '../composables/useCustomUser'
import ChecklistsTable from '../components/checklist/ChecklistsTable.vue'
import { GET_TEMPLATE_BY_UID } from '../graphql/query.user'
import useI18n from '../composables/useI18n'

export default {
  components: {
    RouteHolder,
    ChecklistsTable,
    LogOut,
  },

  setup() {
    const { user, logout } = useAuthentication()
    const { customUser } = useCustomUser()
    const { replace } = useRouter()

    //TODO: toggle details van templates

    const { result, loading, error } = useQuery(GET_TEMPLATE_BY_UID, () => ({
      uid: user?.value?.uid,
    }))
    console.log('error', error)
    watch(result, () => {
      console.log('result', result)

      console.log(result.value.findTemplateByUid)
    })

    const { loadLanguage, AVAILABLE_LANGUAGES, t } = useI18n()

    const handleLogOut = () => {
      logout().then(() => {
        return replace('/')
      })
    }

    const setLanguage = ($event: Event) => {
      const selectedLanguage = ($event.target as HTMLSelectElement).value
      console.log(selectedLanguage)
      loadLanguage(selectedLanguage)
    }

    const getToken = async () => {
      console.log(await user.value?.getIdToken())
      console.log(await user.value?.uid)
    }

    // getToken()
    const title = computed(() => t('account.hi'))

    // const { connectToServer, disconnectFromServer, connected } = useSocket()
    // watch(connectedToServer, () => {
    //   if (connectedToServer.value === true) {
    //     connectToServer()
    //   } else {
    //     disconnectFromServer()
    //   }
    // })

    // connectToServer()

    return {
      user,
      customUser,
      result,
      loading,
      error,
      title,
      AVAILABLE_LANGUAGES,
      setLanguage,

      handleLogOut,
    }
  },
}
</script>
