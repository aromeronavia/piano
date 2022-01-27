<template>
  <div class="flex justify-between w-screen h-16 bg-navbar py-4 px-6">
    <p class="text-lg text-black font-bold">Piano Keyboard</p>
    <github-button class="mr-4" href="https://github.com/aromeronavia/piano" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star aromeronavia/piano on GitHub">Star</github-button>
  </div>
</template>

<script>
import GithubButton from 'vue-github-button'

export default {
  components: {
    GithubButton
  },
}
</script>
