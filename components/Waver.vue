<template>
  <div class="h-full flex">
    <div
      v-for="tile in waveTiles"
      class="mr-1 block"
      :class="{
        'mt-5': tile.position == 0,
        'mt-4': tile.position == 1,
        'mt-3': tile.position == 2,
        'mt-2': tile.position == 3,
        'mt-1': tile.position == 4,
      }"
    >_</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      waveTiles: [{
        position: 0,
        direction: 'positive',
      }, {
        position: 1,
        direction: 'positive',
      }, {
        position: 2,
        direction: 'positive',
      }, {
        position: 3,
        direction: 'positive',
      }, {
        position: 4,
        direction: 'positive',
      }, {
        position: 5,
        direction: 'negative',
      }, {
        position: 4,
        direction: 'negative',
      }, {
        position: 3,
        direction: 'negative',
      }, {
        position: 2,
        direction: 'negative',
      }, {
        position: 1,
        direction: 'negative',
      }, {
        position: 0,
        direction: 'positive',
      }, {
        position: 1,
        direction: 'positive',
      }, {
        position: 2,
        direction: 'positive',
      }, {
        position: 3,
        direction: 'positive',
      }, {
        position: 4,
        direction: 'positive',
      }, {
        position: 5,
        direction: 'negative',
      }, {
        position: 4,
        direction: 'negative',
      }]
    }
  },
  mounted: function () {
    this.interval = setInterval(() => {
      this.waveTiles = this.waveTiles.reduce((acc, tile) => {
        if (tile.direction === 'positive') {
          if (tile.position === 4) {
            acc.push({
              position: 5,
              direction: 'negative',
            })
          } else {
            acc.push({
              position: tile.position + 1,
              direction: tile.direction
            })
          }
        }
        else {
          if (tile.position === 1) {
            acc.push({
              position: 0,
              direction: 'positive',
            })
          } else {
            acc.push({
              position: tile.position - 1,
              direction: tile.direction,
            })
          }
        }

        return acc
      }, [])
    }, 110)
  }
}
</script>
