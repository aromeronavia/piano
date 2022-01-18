<template>
  <div
    class="absolute cursor-pointer bg-gray-900 h-28 w-5 rounded-md rounded-t-none hover:bg-blue-800"
    :class="{
      'invisible': !validPositions.includes(number % 7)
    }"
    :style="{'margin-left': `${(number * 36) - 12}px`}"
  />
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
      validPositions: [1, 2, 4, 5, 6]
    }
  }
}
</script>
