import "./style.css";  
import { Note } from "./model.ts";

// Mapping keys to notes using TypeScript's Record utility type
const keyToNoteMapping: Record<string, Note> = {
  A: { type: "natural", pitch: "A" },
  "A-sharp": { type: "sharp", pitch: "A" },
  B: { type: "natural", pitch: "B" },
  C: { type: "natural", pitch: "C" },
  "C-sharp": { type: "sharp", pitch: "C" },
  D: { type: "natural", pitch: "D" },
  "D-sharp": { type: "sharp", pitch: "D" },
  E: { type: "natural", pitch: "E" },
  F: { type: "natural", pitch: "F" },
  "F-sharp": { type: "sharp", pitch: "F" },
  G: { type: "natural", pitch: "G" },
  "G-sharp": { type: "sharp", pitch: "G" },
};

function playSound(note: Note): void {
  // Adjusting file naming for sharp notes
  const fileName =
    note.type === "sharp"
      ? `piano_${note.pitch}Sharp.mp3`
      : `piano_${note.pitch}.mp3`;
  const audio = new Audio(`./sounds/${fileName}`);

  audio.play().catch((error) => {
    console.error(`Error playing sound file: ${fileName}`, error);
    alert(
      "Sorry, an error occurred while trying to play the sound. Please try again later.",
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const pianoContainer = document.querySelector(".piano-container");

  if (pianoContainer) {
    pianoContainer.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const noteKey = target.id || target.parentElement?.id;

      if (noteKey && keyToNoteMapping[noteKey]) {
        playSound(keyToNoteMapping[noteKey]);
      }
    });
  }
});
