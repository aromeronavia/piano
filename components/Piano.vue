<template>
  <div class="text-white" @mouseup="stopNote" @keydown="handleKeyDown">
    <div class="w-full pb-4 pt-10 px-4 bg-gray-900 rounded-lg">
      <div class="flex justify-center mb-10">
        <div class="bg-blue-600 w-1/3 h-16 rounded-md">
          <waver />
        </div>
      </div>
      <div class="flex relative">
        <key
          v-for="note in naturalNotes"
          @mousedown="playNote(note)"
          @mouseup="stopNote(note)"
        />
        <black-key
          v-for="i in 21"
          :number="i"
          @mousedown="playSemiNote(i)"
          @mouseup="stopSemiNote(i)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Key from '@/components/Key.vue'
import BlackKey from '@/components/BlackKey.vue'
import Waver from '@/components/Waver.vue'
import Note from '@/engine/note'
import { naturalTones, semiTones, tones } from '@/engine/constants'

export default {
  components: { Key, BlackKey, Waver },
  props: {
    type: {
      type: String,
      required: true,
    }
  },
  data: function () {
    const naturalNotes = this.buildNaturalNotes();

    return {
      naturalNotes,
      semiNotes: this.buildSemiNotes(),
      validSemitoneIndexes: Array.from(Array(21).keys()).reduce((acc, item, index) => {
        if ([1, 2, 4, 5, 6].includes(index % 7)) {
          return [...acc, index]
        }

        return [...acc]
      }, []),
      keysToNotes: {
        KeyA: naturalNotes[7],
        KeyS: naturalNotes[8],
        KeyD: naturalNotes[9],
        KeyF: naturalNotes[10],
        KeyG: naturalNotes[11],
        KeyH: naturalNotes[12],
        KeyJ: naturalNotes[13],
        KeyK: naturalNotes[14],
      },
      oscillators: {},
    };
  },
  methods: {
    handleKeyDown: function(event) {
      if (this.keysToNotes[event.code]) {
        this.playNote(this.keysToNotes[event.code])
      }
    },
    handleKeyUp: function(event) {
      if (this.keysToNotes[event.code]) {
        this.stopNote(this.keysToNotes[event.code])
      }
    },
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
      const tones = [];
      const octave = 2;

      for (var octaveIndex = 0; octaveIndex < 3; octaveIndex++) {
        semiTones.forEach(tone => {
          tones.push(new Note({
            noteName: tone,
            octave: octave + octaveIndex,
          }));
        })
      }

      return tones;
    },
    playNote(note) {
      this.oscillator = this.audioContext.createOscillator();
      this.oscillator.type = this.type;
      this.oscillator.connect(this.mainGainNode);
      this.oscillator.frequency.value = note.frequency;

      this.oscillator.start();
      this.oscillators[note.getId()] = this.oscillator
    },
    stopNote(note) {
      this.oscillators[note.getId()] && this.oscillators[note.getId()].stop();
      delete this.oscillators[note.getId()];
    },
    playSemiNote(index) {
      const indexOf = this.validSemitoneIndexes.indexOf(index)
      if (indexOf === -1) { return }

      const note = this.semiNotes[indexOf];
      this.playNote(note);
    },
    stopSemiNote(index) {
      const indexOf = this.validSemitoneIndexes.indexOf(index)
      if (indexOf === -1) { return }

      const note = this.semiNotes[indexOf];
      this.stopNote(note);
    }
  },
  created: function () {
    this.oscillator = null;

    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.mainGainNode = this.audioContext.createGain();
    this.mainGainNode.connect(this.audioContext.destination);
    this.mainGainNode.gain.value = 0.4;
  },
  mounted: function () {
    window.addEventListener("keydown", event => {
      if (event.defaultPrevented) return;
      if (event.repeat) return;

      this.handleKeyDown(event);
    });

    window.addEventListener("keyup", event => {
      this.handleKeyUp(event);
    });
  }
}
</script>
