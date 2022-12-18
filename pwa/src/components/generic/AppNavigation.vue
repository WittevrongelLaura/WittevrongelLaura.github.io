<template>
  <nav class="mx-auto flex w-full justify-center items-center sm:justify-between sm:h-9">
    <div class="sm:float-left">
      <router-link to="/">
        <img
          v-if="user"
          class="min-w-11 hidden w-20 sm:block sm:w-36"
          src="../../../public/logoTripCheck3.png"
          alt="logo tripcheck"
        />
        <img
          v-else
          class="min-w-11 mx-[59.57px] hidden w-20 sm:block sm:w-36"
          src="../../../public/logoTripCheck3.png"
          alt="logo tripcheck"
        />
        <img
          class="min-w-11 hidden w-6 sm:w-36"
          src="../../../public/logoTripCheckOnly.png"
          alt="logo tripcheck"
        />
      </router-link>
    </div>

    <ul
      class="flex justify-around gap-x-14 text-sm sm:gap-x-3 sm:text-lg"
    >
      <li>
        <router-link
          exact-active-class="sm:text-greenPrimary stroke-green700"
          class="hover:text-green900 inline-block rounded-md p-0 font-mono uppercase outline-none transition-all duration-75 ease-in-out focus-visible:ring-2 sm:px-3 sm:py-6"
          to="/"
        >
          <Home class="stroke-green500 h-6 sm:hidden" />
          <p
            class="from-greenPrimary to-greenPrimary ease-out' hidden bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 hover:bg-[length:100%_2px] sm:block"
          >
            {{ $t('navigation.home') }}
          </p>
        </router-link>
      </li>

      <li>
        <router-link
          active-class="text-greenPrimary stroke-green700"
          class="hover:text-green900 inline-block rounded-md p-0 font-mono uppercase outline-none transition-all duration-75 ease-in-out focus-visible:ring-2 sm:px-3 sm:py-6"
          to="/templates"
        >
          <ShoppingBag class="stroke-green500 h-6 sm:hidden" />
          <p
            class="from-greenPrimary to-greenPrimary ease-out' hidden bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 hover:bg-[length:100%_2px] sm:block"
          >
            {{ $t('navigation.templates') }}
          </p>
        </router-link>
      </li>

      <li>
        <router-link
          active-class="text-greenPrimary"
          rounded-md
          ring-2
          class="hover:text-green900 inline-block rounded-md p-0 font-mono uppercase outline-none transition-all duration-75 ease-in-out focus-visible:ring-2 sm:px-3 sm:py-6"
          to="/trips"
          v-if="user"
        >
          <Map class="stroke-green500 h-6 sm:hidden" />
          <p
            class="from-greenPrimary to-greenPrimary ease-out' hidden bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 hover:bg-[length:100%_2px] sm:block"
          >
            {{ $t('navigation.trips') }}
          </p>
        </router-link>
      </li>
      <li class="sm:hidden">
        <router-link
          class="hover:text-green900 rounded-md p-0 font-mono uppercase outline-none transition-all duration-75 ease-in-out focus-visible:ring-2 sm:ml-[80.41px] sm:px-3"
          rounded-md
          ring-2
          active-class="text-greenPrimary"
          to="/account"
          v-if="user"
        >
          <User class="stroke-green500 h-6 sm:hidden" />
          <p
            class="from-greenPrimary to-greenPrimary hidden bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out hover:bg-[length:100%_2px] sm:block"
          >
            {{ user.displayName }}
          </p>
        </router-link>

        <router-link
          active-class="text-greenPrimary"
          class="hover:text-green900 inline-block rounded-md p-0 font-mono uppercase outline-none transition-all duration-75 ease-in-out focus-visible:ring-2 sm:px-3 sm:py-6"
          to="/auth/login"
          v-else-if="!user"
        >
          <!-- TODO: button? -->
          <p
            class="from-greenPrimary to-greenPrimary whitespace-nowrap bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat text-sm transition-all duration-500 ease-out hover:bg-[length:100%_2px] sm:text-base"
          >
            {{ $t('navigation.signin') }}
          </p>
        </router-link>
        <!-- TODO: log out home page navigation not right -->
        <router-link
          class="hover:text-green900 inline-block rounded-md p-0 font-mono uppercase outline-none transition-all duration-75 ease-in-out focus-visible:ring-2 sm:px-3 sm:py-6"
          to="/auth/register"
          v-if="!user"
        >
          <button
            class="bg-green700 hover:bg-green900 rounded-lg sm:py-3 sm:px-6"
          >
            <p class="text-green50 text-base font-bold uppercase">
              {{ $t('navigation.free') }}
            </p>
          </button>
        </router-link>
      </li>
    </ul>
    <div class="hidden items-center text-sm sm:flex sm:text-lg">
      <router-link
        class="hover:text-green900 rounded-md p-0 font-mono uppercase outline-none transition-all duration-75 ease-in-out focus-visible:ring-2 sm:ml-[80.41px] sm:px-3"
        rounded-md
        ring-2
        active-class="text-greenPrimary"
        to="/account"
        v-if="user"
      >
        <User class="stroke-green500 h-6 sm:hidden" />
        <p
          class="from-greenPrimary to-greenPrimary bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out hover:bg-[length:100%_2px]"
        >
          {{ user.displayName }}
        </p>
      </router-link>

      <router-link
        active-class="text-greenPrimary"
        class="hover:text-green900 inline-block rounded-md p-0 font-mono uppercase outline-none transition-all duration-75 ease-in-out focus-visible:ring-2 sm:px-3 sm:py-6"
        to="/auth/login"
        v-else-if="!user"
      >
        <!-- TODO: button? -->
        <p
          class="from-greenPrimary to-greenPrimary whitespace-nowrap bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat text-sm transition-all duration-500 ease-out hover:bg-[length:100%_2px] sm:text-base"
        >
          {{ $t('navigation.signin') }}
        </p>
      </router-link>
      <!-- TODO: log out home page navigation not right -->
      <router-link
        class="hover:text-green900 inline-block rounded-md p-0 font-mono uppercase outline-none transition-all duration-75 ease-in-out focus-visible:ring-2 sm:px-3 sm:py-6"
        to="/auth/register"
        v-if="!user"
      >
        <button
          class="bg-green700 hover:bg-green900 rounded-lg sm:py-3 sm:px-6"
        >
          <p class="text-green50 text-base font-bold uppercase">
            {{ $t('navigation.free') }}
          </p>
        </button>
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import useAuthentication from '../../composables/useAuthentication'
import { Home, Map, User, ShoppingBag } from 'lucide-vue-next'

export default {
  components: { Home, Map, User, ShoppingBag },
  setup() {
    const width = 'w-[263.14px]]'
    const { user } = useAuthentication()
    return {
      user,
      width,
    }
  },
}
</script>