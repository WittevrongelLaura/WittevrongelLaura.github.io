<template>
  <div
    class="w-70 fixed bottom-24 right-3.5 h-80 rounded-md bg-white p-6 shadow-md"
  >
    <div class="flex flex-col">
      <h3
        v-if="templatesInCart.length == 0"
        class="self-center text-base font-bold text-gray-500"
      >
        {{ $t('templates.emptyShoppingCart') }}
      </h3>
      <div
        v-else-if="templatesInCart.length > 0"
        v-for="i of templatesInCart"
        :key="i.id"
        class="flex justify-between"
      >
        <label class="text-black">{{ i.name }}</label>
        <button @click="DeleteTemplateFromCart(i.name)">
          <Trash2 class="h-4 w-4 self-center stroke-red-600" />
        </button>
      </div>
      <!-- <stripe-checkout
        ref="checkoutRef"
        mode="subscription"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successUrl"
        :cancel-url="cancelUrl"
        @loading="(v) => (loading = v)"
      /> -->
      <button
        v-if="templatesInCart.length > 0"
        class="bg-green700 hover:bg-green900 font-bold text-white shadow-sm"
        @click="updateDB()"
      >
        <span v-if="!loading">{{ $t('templates.pay') }}</span>
        <div v-else>
          <Loader2 class="animate-spin" />
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Trash2, Loader2 } from 'lucide-vue-next'
import { StripeCheckout } from '@vue-stripe/vue-stripe'
import { useMutation } from '@vue/apollo-composable'
import { reactive, ref, Ref, watch } from 'vue'
import useTemplatesInCart from '../../composables/useTemplatesInCart'
import { UPDATE_USER } from '../../graphql/mutation.user'
import useAuthentication from '../../composables/useAuthentication'
import Template from '../../interfaces/interface.template'
import useI18n from '../../composables/useI18n'

const {
  GetTemplatesInCart,
  DeleteTemplateFromCart,
  DeleteAllTemplatesFromCart,
} = useTemplatesInCart()

let paymentSuccessfull = ref(false)

export default {
  components: {
    StripeCheckout,
    Trash2,
    Loader2,
  },

  //Stripe (nice to have dus laten staan in vue2)
  // data() {
  //   //this.publishableKey = import.meta.env.VITE_sApiKey
  //   //@ts-ignore
  //   this.publishableKey =
  //     'pk_test_51M3NANB4e6qZ1Bei9iic7P7wPaGspkiWjS5bw6oqlMseIl0Ie6ONuoaSgLppI2XHQPSU956NnYKPmRii2YKrw2yd000R1N85Bo'

  //   return {
  //     loading: false,
  //     lineItems: [
  //       {
  //         price: 'price_1M3PDKB4e6qZ1BeiuStNaFvs',
  //         quantity: 1,
  //       },
  //     ],
  //     succesURL: '/templates/paymentsuccess',
  //     cancelURL: '/templates/paymentcancelled',
  //   }
  // },

  // methods: {
  //   submit() {
  //     console.log(this.publishableKey)

  //     this.$refs.checkoutRef.redirectToCheckout()
  //   },
  // },

  setup() {
    const templatesInCart: Ref<Template[]> = ref(GetTemplatesInCart())
    const { user } = useAuthentication()
    const loading: Ref<boolean> = ref(false)

    const userInput = reactive({
      uid: user?.value?.uid,
      templates: templatesInCart.value,
    })
    console.log("templatesInCartvoor", templatesInCart)

    const updateDB = () => {
      loading.value = true
      const { mutate: updateUser } = useMutation(UPDATE_USER, () => ({
        variables: {
          updateUserInput: userInput,
        },
      }))

      try {
        updateUser()
        paymentSuccessfull.value = true
        loading.value = false
        templatesInCart.value = []
        DeleteAllTemplatesFromCart()
      } catch (error) {
        console.log(error)
        paymentSuccessfull.value = false
      }
      console.log('paymentSuccessfull.value', paymentSuccessfull.value)
    }

    const { loadLanguage, AVAILABLE_LANGUAGES, t } = useI18n()

    const setLanguage = ($event: Event) => {
      const selectedLanguage = ($event.target as HTMLSelectElement).value
      console.log(selectedLanguage)
      loadLanguage(selectedLanguage)
    }

    return {
      DeleteTemplateFromCart,
      updateDB,
      setLanguage,

      templatesInCart,
      paymentSuccessfull,
      loading,
      AVAILABLE_LANGUAGES,
    }
  },
}
</script>
