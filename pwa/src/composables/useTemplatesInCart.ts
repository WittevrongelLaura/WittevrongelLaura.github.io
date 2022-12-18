import { ref, Ref, watch } from 'vue'
import { computed } from '@vue/reactivity'

import Template from '../interfaces/interface.template'

let numberOfTemplates = ref(0)
const templatesInCart: Ref<Template[]> = ref([])

export default () => {
  const GetNumberOfTemplates = () => {
    console.log('GetNumberOfTemplates', numberOfTemplates.value)

    return numberOfTemplates.value
  }

  const GetTemplatesInCart = () => {
    return templatesInCart.value
  }

  const GetTemplatesInCartLength = () => {
    console.log('GetTemplatesInCart', templatesInCart.value)

    console.log('GetTemplatesInCartLength', templatesInCart.value.length)
    return templatesInCart.value.length
  }

  const IncrementNumberOfTemplates = () => {
    let templates = GetTemplatesInCartLength()
    templates++
    return templates
  }

  const DecrementNumberOfTemplates = () => {
    let templates = GetTemplatesInCartLength()
    templates--
    return templates
  }

  const AddTemplateToCart = (template: Template) => {
    console.log('AddTemplateToCart', template)

    let templateInCart = templatesInCart.value.find((t) => t.id === template.id)

    if (templateInCart) {
      console.log('Template already in cart')
    } else {
      numberOfTemplates.value++
      templatesInCart.value.push(template)
      GetNumberOfTemplates()
    }
  }

  const DeleteTemplateFromCart = (name: any) => {
    console.log('DeleteTemplateFromCart', name)
    numberOfTemplates.value--
    const index = templatesInCart.value.findIndex((t) => t.name === name)
    console.log('index', index)

    if (index > -1) {
      templatesInCart.value.splice(index, 1)
    }
  }

  const DeleteAllTemplatesFromCart = () => {
    console.log('DeleteAllTemplates')
    numberOfTemplates.value = 0
    GetTemplatesInCart()
    console.log('templatesInCart after', templatesInCart.value)
  }

  // watch(templatesInCart, (val) => {

  // })

  return {
    GetNumberOfTemplates,
    GetTemplatesInCart,
    AddTemplateToCart,
    DeleteTemplateFromCart,
    DeleteAllTemplatesFromCart,
  }
}
