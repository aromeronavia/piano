import { tones, A4 } from './constants';

export default class Note {
  constructor(options = {}) {
    this.noteName = options.noteName || A4.NOTE_NAME;
    this.octave = !isNaN(options.octave) ? options.octave : A4.OCTAVE;
    this.frequency = this._calculateFrequency();
    this.degree = options.degree || null;
  }

  _calculateFrequency() {
    const power = this._getDistanceFromA4() / tones.length;
    return parseFloat((A4.FREQUENCY * Math.pow(2, power)).toFixed(2));
  }

  _getDistanceFromA4() {
    const octaveDifference = (this.octave - A4.OCTAVE) * tones.length;
    const toneDifference =  tones.indexOf(this.noteName) - tones.indexOf(A4.NOTE_NAME);

    return octaveDifference + toneDifference;
  }
}
