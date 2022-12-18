<template>
    <div class="grid min-h-screen grid-rows-[auto_1fr_auto] ">
      <AppHeader class="bg-white"/>
  
      <router-view class="overflow-y-auto h-auto bg-green100/20"></router-view>
  
      <AppFooter class=" h-16 bottom-0 absolute sm:relative w-full  bg-white" />
    </div>
  </template>
  
  <script lang="ts">
  import AppHeader from '../generic/AppHeader.vue'
  import AppFooter from '../generic/AppFooter.vue'
  
  export default {
    components: {
      AppHeader,
      AppFooter,
    },
  }
  </script>