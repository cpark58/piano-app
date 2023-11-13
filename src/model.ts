// Define the type for possible note classifications
type NoteType = "natural" | "sharp";

// Define the type for possible note pitches
type NotePitch = "C" | "D" | "E" | "F" | "G" | "A" | "B";

// Define the main interface for a Note
interface Note {
  type: NoteType;
  pitch: NotePitch;
}

// export interface
export type { Note };
