<template>
  <route-holder>
    <div class="mt-5 text-center ">
      <h1 class="font-theme sm:text-4xl text-lg font-bold ">
        Make free checklists,
        <br />
        and share them with your friends.
      </h1>
      <h3 class="pt-2 sm:pb-10 pb-6 sm:text-lg text-xs">
        Organize your mind or scale. Your business the right way, every time.
      </h3>

      <a
        v-if="!user"
        href="/auth/register"
        class="bg-greenPrimary rounded-lg sm:py-4 sm:px-6 py-2 px-3 hover:bg-green-800 focus:bg-green-800"
      >
        <b class="text-green50 sm:text-lg text-base">Make a free checklist</b>
      </a>
      <a
        v-else
        href="/trips"
        class="bg-greenPrimary rounded-lg sm:py-4 sm:px-6 py-2 px-3 hover:bg-green-800 focus:bg-green-800"
      >
        <b class="text-green50 sm:text-lg text-base">Make a free checklist</b>

      </a>
    </div>
    <div class="mt-6">
      <img src="/tripPage.png" alt="">
    </div>
    <div class="sm:mt-6 mt-3 mb-4 text-center">
      <h2 class="sm:text-3xl text-lg font-medium">How it works.</h2>
      <p class="sm:pt-4 pt-2 sm:text-sm text-xs">
        Make a recurring checklist or process, share with other travellers.
      </p>
      <div class="mt-6 flex justify-center">
        <div class="grid sm:grid-cols-[repeat(3,minmax(0,335px))] grid-rows-[repeat(3,min(0,288px))] sm:gap-x-10 gap-4">
          <div class="bg-greenPrimary/30 rounded-md sm:p-8 p-4 shadow-sm outline-none">
            <div class="mb-3 flex flex-col items-center">
              <Copy class="h-10 w-10 stroke-green-700" />
            </div>
            <h3 class="pb-3 text-left font-bold">
              1. Create or copy a process
            </h3>
            <p class="text-left text-sm">
              Create or copy a process template. Add step-by-step categories
              with tasks to make sure you don't forget anything.
            </p>
          </div>
          <div class="bg-greenPrimary/30 rounded-md sm:p-8 p-4 shadow-sm outline-none">
            <div class="mb-3 flex flex-col items-center">
              <Users class="h-10 w-10 stroke-green-700" />
            </div>
            <h3 class="pb-3 text-left font-bold">2. Share with team members</h3>
            <p class="text-left text-sm">
              Team members don't want to login to more software. Just add your
              friends to the checklist.
            </p>
          </div>
          <div class="bg-greenPrimary/30 rounded-md sm:p-8 p-4 shadow-sm outline-none">
            <div class="mb-3 flex flex-col items-center">
              <MapPin class="h-10 w-10 stroke-green-700" />
            </div>
            <h3 class="pb-3 text-left font-bold">3. Track your processes</h3>
            <p class="text-left text-sm">
              When a team member completes a task, you'll see it in the
              checklist. You can also see who completed it.
            </p>
          </div>
        </div>
      </div>
    </div>
  </route-holder>
</template>

<script lang="ts">
import RouteHolder from '../components/holders/RouteHolder.vue'
import useAuthentication from '../composables/useAuthentication'
import { Users, Copy, MapPin } from 'lucide-vue-next'
import useSocket from '../composables/useSocket';
import { ref, Ref, watch } from 'vue';
// import {StripeCheckout, StripePlugin} from '@vue-stripe/vue-stripe'

export default {
  components: {
    RouteHolder,
    Users,
    Copy,
    MapPin,
  },


  setup() {
    const { user, logout } = useAuthentication()


    const {
      connectToServer,
      connected,
      disconnectFromServer,
      socketServer,
    } = useSocket()


    connectToServer()

      watch(connected, () => {
      if (connected.value == false) {
        disconnectFromServer()
      } else {
        connectToServer()
        console.log('connection made ')
      }
    })
    
    return {
      user,
    }
  },
}
</script>
