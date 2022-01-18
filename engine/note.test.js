import Note from "../engine/note";

test("test getFrequency", () => {
  const c4 = new Note({noteName: "C", octave: 4});
  expect(c4.frequency).toBe(261.63);

  const dSharp6 = new Note({noteName: "D#", octave: 6});
  expect(dSharp6.frequency).toBe(1244.51);

  const e0 = new Note({noteName: "E", octave: 0});
  expect(e0.frequency).toBe(20.60);
});
