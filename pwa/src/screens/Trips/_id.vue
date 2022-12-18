<template>
  <div class="flex flex-1 justify-center">
    <route-holder class="md:mx-40 my-10 md:mb-16  xl:mb-30 flex flex-1  max-w-[1190px] bg-white p-40 shadow-lg">
      <ChecklistPage v-if="!loading" :checklist="result?.checklist" />
    </route-holder>
  </div>
</template>

<script lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { useRoute } from 'vue-router'
import RouteHolder from '../../components/holders/RouteHolder.vue'
import { CHECKLIST_BY_ID } from '../../graphql/query.checklist'
import Checklist from '../../interfaces/interface.checklist'
import ChecklistPage from '../../components/checklist/ChecklistPage.vue'
import useSocket from '../../composables/useSocket'

export default {
  components: {
    RouteHolder,
    ChecklistPage,
  },

  setup() {
    
    const {
      socketServer,
    } = useSocket()
    const { params } = useRoute()
    const { result, error, loading } = useQuery<{ checklist: Checklist }>(
      CHECKLIST_BY_ID,
      {
        id: params.id,
      },
    )
    socketServer.value?.emit('checklist:getchecklist', params)
    socketServer.value?.on('checklist:getchecklist', (data: Checklist) => {
      result.value = { checklist: data }
    })

    return {
      result,
      loading,
      error,
    }
  },
}
</script>
