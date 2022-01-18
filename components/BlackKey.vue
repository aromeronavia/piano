<template>
  <div class="cursor-pointer bg-gray-900 h-28 w-5 mr-4 rounded-md rounded-t-none hover:bg-blue-800" />
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: true
    }
  }
}
</script>
