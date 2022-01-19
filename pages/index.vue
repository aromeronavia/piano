<template>
  <div>
    <div class="w-screen justify-center flex mt-4">
      <select v-model="type">
        <option value="square"> Square </option>
        <option value="sine"> Sine </option>
        <option value="sawtooth"> Sawtooth </option>
        <option value="triangle"> Triangle </option>
      </select>
    </div>
    <div class="bg-blue flex justify-center w-screen mt-4">
      <piano :type="type" />
    </div>
  </div>
</template>

<script>
import Piano from '@/components/Piano.vue'

export default {
  components: { Piano },
  data: function () {
    return { type: 'square' }
  }
}
</script>
