import { useState } from "react";
import Track from "./Track";

const TOKENIZED_SONGS = [
  "BOS_None BOS_None Bar_0 Track_Start Program_-1 NoteDensity_2 Bar_Start Bar_End Bar_Start TimeShift_3.0.8 PitchDrum_35 Velocity_127 Duration_0.2.8 PitchDrum_49 Velocity_127 Duration_0.2.8 Bar_End Bar_Start PitchDrum_42 Velocity_127 Duration_0.2.8 TimeShift_1.0.8 PitchDrum_37 Velocity_127 Duration_0.2.8 PitchDrum_42 Velocity_127 Duration_0.2.8 TimeShift_1.0.8 PitchDrum_42 Velocity_127 Duration_0.2.8 TimeShift_0.4.8 PitchDrum_35 Velocity_127 Duration_0.2.8 TimeShift_0.4.8 PitchDrum_38 Velocity_127 Duration_0.2.8 PitchDrum_42 Velocity_127 Duration_0.2.8 Bar_End Bar_Start PitchDrum_35 Velocity_127 Duration_0.2.8 PitchDrum_42 Velocity_127 Duration_0.2.8 TimeShift_1.0.8 PitchDrum_37 Velocity_127 Duration_0.2.8 PitchDrum_42 Velocity_127 Duration_0.2.8 TimeShift_1.0.8 PitchDrum_42 Velocity_127 Duration_0.2.8 TimeShift_0.4.8 PitchDrum_35 Velocity_127 Duration_0.2.8 TimeShift_0.4.8 PitchDrum_38 Velocity_127 Duration_0.2.8 PitchDrum_42 Velocity_127 Duration_0.2.8 Bar_End Track_End Track_Start Program_5 NoteDensity_2 Bar_Start Bar_End Bar_Start TimeShift_3.5.8 Pitch_57 Velocity_111 Duration_0.1.8 Bar_End Bar_Start PitchIntervalTime_0 Velocity_111 Duration_0.4.8 PitchIntervalChord_7 Velocity_111 Duration_0.4.8 PitchIntervalChord_3 Velocity_111 Duration_0.4.8 TimeShift_1.0.8 PitchIntervalTime_2 Velocity_111 Duration_0.4.8 PitchIntervalChord_8 Velocity_111 Duration_0.4.8 PitchIntervalChord_4 Velocity_111 Duration_0.4.8 TimeShift_1.0.8 PitchIntervalTime_0 Velocity_111 Duration_0.4.8 PitchIntervalChord_8 Velocity_111 Duration_0.4.8 PitchIntervalChord_4 Velocity_111 Duration_0.4.8 TimeShift_1.0.8 PitchIntervalTime_-2 Velocity_111 Duration_0.4.8 PitchIntervalChord_7 Velocity_111 Duration_0.4.8 PitchIntervalChord_3 Velocity_111 Duration_0.4.8 Bar_End Bar_Start PitchIntervalTime_0 Velocity_111 Duration_0.4.8 PitchIntervalChord_7 Velocity_111 Duration_0.4.8 PitchIntervalChord_3 Velocity_111 Duration_0.4.8 TimeShift_1.0.8 PitchIntervalTime_2 Velocity_111 Duration_0.4.8 PitchIntervalChord_8 Velocity_111 Duration_0.4.8 PitchIntervalChord_4 Velocity_111 Duration_0.4.8 TimeShift_1.0.8 PitchIntervalTime_0 Velocity_111 Duration_0.4.8 PitchIntervalChord_8 Velocity_111 Duration_0.4.8 PitchIntervalChord_4 Velocity_111 Duration_0.4.8 TimeShift_1.0.8 PitchIntervalTime_-2 Velocity_111 Duration_0.4.8 PitchIntervalChord_7 Velocity_111 Duration_0.4.8 PitchIntervalChord_3 Velocity_111 Duration_0.4.8 Bar_End Track_End Track_Start Program_33 NoteDensity_0 Bar_Start Bar_End Bar_Start Bar_End Bar_Start Pitch_38 Velocity_127 Duration_0.4.8 TimeShift_1.0.8 PitchIntervalTime_2 Velocity_127 Duration_0.4.8 TimeShift_1.0.8 PitchIntervalTime_0 Velocity_127 Duration_0.4.8 TimeShift_1.0.8 PitchIntervalTime_-2 Velocity_127 Duration_0.4.8 Bar_End Bar_Start PitchIntervalTime_0 Velocity_127 Duration_0.4.8 TimeShift_1.0.8 PitchIntervalTime_2 Velocity_127 Duration_0.4.8 TimeShift_1.0.8 PitchIntervalTime_0 Velocity_127 Duration_0.4.8 TimeShift_1.0.8 PitchIntervalTime_-2 Velocity_127 Duration_0.4.8 Bar_End Track_End",
];

const get_tracks = (song) => {
  const tracks = [[]];
  for (const token of song.split(" ")) {
    if (token === "Track_Start") {
      tracks.push(["Track_Start"]);
    } else {
      tracks[tracks.length - 1].push(token);
    }
  }

  return tracks;
};

const Editor = () => {
  const [tracks, setTracks] = useState(get_tracks(TOKENIZED_SONGS[0]));

  return (
    <div>
      <header>Editor</header>
      <div>
        {tracks.slice(1).map((track) => (
          <Track track={track} />
        ))}
      </div>
    </div>
  );
};

export default Editor;
