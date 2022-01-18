<template>
  <div class="text-white">
    <div class="w-full pb-4 pt-10 px-4 bg-gray-900 rounded-lg">
      <div class="flex justify-center mb-10">
        <div class="bg-blue-600 w-1/3 h-16 rounded-md">
          <waver />
        </div>
      </div>
      <div class="flex relative">
        <key v-for="i in 22" :number="i" />
        <div class="absolute w-full flex ml-6">
          <black-key v-for="i in 21" :number="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Key from '@/components/Key.vue'
import BlackKey from '@/components/BlackKey.vue'
import Waver from '@/components/Waver.vue'

export default {
  components: { Key, BlackKey, Waver }
}
</script>
