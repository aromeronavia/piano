<template>
  <button
    class="z-1 w-8 h-44 bg-white rounded-md rounded-t-none mr-1 cursor-pointer hover:bg-blue-600 focus:outline-none first:rounded-t-md last:rounded-t-md"
    :class="{
      'bg-blue-800': active
    }"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
  >
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    handleMouseDown() {
      this.$emit('mousedown');
    },
    handleMouseUp() {
      this.$emit('mouseup');
    }
  }
}
</script>
