<template>
  <div class="bg-primary font-serif w-screen h-screen">
    <navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style>
body {
  background-color: #003049;
}
</style>
