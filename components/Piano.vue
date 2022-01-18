<template>
  <div class="text-white">
    <div class="w-full pb-4 pt-10 px-4 bg-gray-900 rounded-lg">
      <div class="flex justify-center mb-10">
        <div class="bg-blue-600 w-1/3 h-16 rounded-md">
          <waver />
        </div>
      </div>
      <div class="flex relative">
        <key v-for="note in naturalNotes" @mousedown="playNote(note)" @mouseup="stopNote" />
        <black-key v-for="i in 21" :number="i" />
      </div>
    </div>
  </div>
</template>

<script>
import Key from '@/components/Key.vue'
import BlackKey from '@/components/BlackKey.vue'
import Waver from '@/components/Waver.vue'
import Note from '@/engine/note'
import { naturalTones } from '@/engine/constants'

export default {
  components: { Key, BlackKey, Waver },
  data: function () {
    return {
      naturalNotes: this.buildNaturalNotes(),
      semiNotes: this.buildSemiNotes()
    };
  },
  methods: {
    buildNaturalNotes: function () {
      const tones = [];
      const octave = 2;

      for (var octaveIndex = 0; octaveIndex < 3; octaveIndex++) {
        naturalTones.forEach(tone => {
          tones.push(new Note({
            noteName: tone,
            octave: octave + octaveIndex,
          }));
        })
      }

      tones.push(new Note({
        noteName: 'C',
        octave: 5
      }));

      return tones;
    },
    buildSemiNotes: function () {
    },
    playNote(note) {
      this.oscillator = this.audioContext.createOscillator();
      this.oscillator.connect(this.mainGainNode);
      this.oscillator.frequency.value = note.frequency;

      this.oscillator.start();
    },
    stopNote() {
      this.oscillator.stop();
    }

  },
  created: function () {
    this.oscillator = null;

    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.mainGainNode = this.audioContext.createGain();
    this.mainGainNode.connect(this.audioContext.destination);
    this.mainGainNode.gain.value = 0.4;
  }
}
</script>
