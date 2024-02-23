import styled from "@emotion/styled";
import { useState } from "react";

export const BarWrapper = styled.div`
  width: 96px;

  background-color: ${() =>
    `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    }, 0.3)`};

  position: relative;
`;

export const BeatWrapper = styled.div`
  display: flex;

  width: 24px;
`;

export const Note = styled.div`
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  border: 1px solid black;

  position: absolute;
`;

const get_notes = (bar) => {
  const notes = Array.from(Array(8 * 12), () => []);

  let i = 0;
  let pitch = null;
  for (const token of bar.slice(1, bar.length - 1)) {
    if (token.startsWith("TimeShift")) {
      let move = token.split("_")[1];
      move = move.split(".").map(Number);
      i += move[0] * 8 + move[1] * (move[2] === 8 ? 1 : 2);
    } else if (token.startsWith("Duration")) {
      let duration = token.split("_")[1];
      duration = duration.split(".").map(Number);
      duration = duration[0] * 8 + duration[1] * (duration[2] === 8 ? 1 : 2);
      for (let j = i; j < i + duration && j < 96; j++) {
        notes[j].push(pitch);
      }
    } else if (token.startsWith("Pitch_") || token.startsWith("PitchDrum_")) {
      pitch = Number(token.split("_")[1]);
    }
  }

  return notes;
};

const Bar = ({ bar }) => {
  const [notes, setNotes] = useState(get_notes(bar));

  return (
    <BarWrapper draggable={true}>
      {notes.map((pitches, tick8idx) =>
        pitches.map((pitch) => (
          <Note
            key={`note-${tick8idx}-${pitch}`}
            top={128 - pitch}
            left={tick8idx}
            draggable={true}
          />
        ))
      )}
    </BarWrapper>
  );
};

export default Bar;
