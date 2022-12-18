<template>
  <div class="flex justify-center">
    <route-holder>
      <div class="bg-white py-8 px-8 shadow-lg sm:px-32 sm:py-20">
        <div class="my-3 flex justify-center">
          <h1 class="font-theme mb-8 text-lg font-bold sm:text-4xl lg:text-5xl">
            {{ $t('templates.title') }}
          </h1>
        </div>
        <div class="flex flex-col items-center">
          <div v-if="loading" class="animate-pulse">
            <div v-for="i of skeletons" :key="i">
              <p class="bg-neutral-300"></p>
              <div>
                <ul>
                  <li class="bg-neutral-200"></li>
                  <li class="bg-neutral-200"></li>
                  <li class="bg-neutral-200"></li>
                  <li class="bg-neutral-200"></li>
                </ul>
              </div>
            </div>
          </div>

          <div v-else-if="error">
            <p>{{ $t('templates.error') }}</p>
          </div>
          <div v-else-if="result.templates.length === 0">
            <p>There are no templates</p>
          </div>

          <div
            v-else-if="result.templates.length !== 0"
            class="flex flex-col gap-12 p-10 px-8"
          >
            <div v-for="t of result.templates" :key="t.id" class="pb-8">
              <h3 class="mb-8 font-bold sm:text-xl lg:text-2xl">
                {{ t.name }}
              </h3>
              <ul class="mb-8">
                <li v-for="i of t.items" :key="i.id">
                  <input type="checkbox" name="item" id="item" />
                  <label class="pl-4">{{ i }}</label>
                </li>
              </ul>
              <button
                @click="AddTemplateToCart(t)"
                class="bg-green700 hover:bg-green900 flex rounded-lg py-3 px-6"
              >
                <Plus class="w-4 stroke-white" /><ShoppingCart
                  class="stroke-white"
                />
              </button>
            </div>
          </div>
        </div>

        <AppShoppingCart v-if="IsHidden" />

        <div v-if="result?.templates.length !== 0">
          <button
            v-on:click="IsHidden = !IsHidden"
            @click="ShowShoppingCart()"
            class="bg-green700 hover:bg-green900 fixed bottom-[60px] right-3.5 rounded-full p-5 shadow-sm"
          >
            <ShoppingCart class="stroke-white" />
          </button>

          <div
            class="fixed bottom-[105px] right-3 flex h-6 w-6 flex-col items-center rounded-full bg-red-600 text-white"
            :key="GetNumberOfTemplates()"
          >
            {{ GetNumberOfTemplates() }}
          </div>
        </div>
      </div>
    </route-holder>
  </div>
</template>

<script lang="ts">
//TODO: add icon for each template
import { ref, Ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { Plus, ShoppingCart, Trash2 } from 'lucide-vue-next'
import RouteHolder from '../../components/holders/RouteHolder.vue'
import { TEMPLATES } from '../../graphql/query.template'
import useTemplatesInCart from '../../composables/useTemplatesInCart'
import AppShoppingCart from '../../components/generic/AppShoppingCart.vue'
import useI18n from '../../composables/useI18n'

export default {
  components: {
    RouteHolder,
    AppShoppingCart,
    Plus,
    ShoppingCart,
    Trash2,
  },

  setup() {
    const { result, loading, error } = useQuery(TEMPLATES)
    console.log(result)
    const { AddTemplateToCart, GetNumberOfTemplates } = useTemplatesInCart()
    const skeletons: Ref<number> = ref(4)
    // const templatesInCart: Ref<Template[]> = ref([])
    // let numberOfTemplates = GetNumberOfTemplates()
    const IsHidden = ref(false)

    const { loadLanguage, AVAILABLE_LANGUAGES, t } = useI18n()

    const setLanguage = ($event: Event) => {
      const selectedLanguage = ($event.target as HTMLSelectElement).value
      console.log(selectedLanguage)
      loadLanguage(selectedLanguage)
    }
    // const AddToCart = (template: Template) => {
    //   console.log('add to cart')
    //   // console.log(template)

    //   //check if template is already in cart
    //   let templateInCart = templatesInCart.value.find(
    //     (t) => t.id == template.id,
    //   )

    //   if (templateInCart) {
    //     console.log('template is already in cart')
    //   } else {
    //     //numberOfTemplates.value++
    //     // console.log(numberOfTemplates)
    //     IncrementNumberOfTemplates()
    //     templatesInCart.value.push(template)
    //   }
    // }

    const ShowShoppingCart = () => {
      console.log('show shopping cart')
      // console.log(templatesInCart)
      // for (let i = 0; i < templatesInCart.value.length; i++) {
      //   console.log(templatesInCart.value[i].name)
      // }
    }

    // const deleteItem = (name) => {
    //   console.log('delete item: ' + name)
    //   numberOfTemplates.value--
    //   const index = templatesInCart.value.findIndex(
    //     (template) => template.name === name,
    //   )
    //   console.log(index)

    //   if (index > -1) {
    //     templatesInCart.value.splice(index, 1)
    //   }
    // }

    return {
      result,
      loading,
      error,
      skeletons,
      // numberOfTemplates,
      // templatesInCart,
      IsHidden,
      AVAILABLE_LANGUAGES,

      // AddToCart,
      ShowShoppingCart,
      // deleteItem,
      AddTemplateToCart,
      GetNumberOfTemplates,
      setLanguage,
    }
  },
}
</script>
