import styled from "@emotion/styled";
import { useState } from "react";
import Bar from "./Bar";

const TrackWrapper = styled.div`
  display: flex;
  flex-direction: row;

  min-width: 480px;

  border: 2px solid black;
`;

const InstWrapper = styled.div`
  width: 80px;
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: row;

  height: 130px;
`;

const get_bars = (track) => {
  const bars = [[]];
  for (const token of track.slice(3, track.length - 1)) {
    if (token === "Bar_Start") {
      bars.push(["Bar_Start"]);
    } else {
      bars[bars.length - 1].push(token);
    }
  }

  return bars;
};

const Track = ({ track }) => {
  const INST = track[1].split("_")[1];
  const [bars, setBars] = useState(get_bars(track));

  return (
    <TrackWrapper>
      <InstWrapper>INST : {INST} |</InstWrapper>
      <BarContainer>
        {bars.map((bar, idx) => (
          <Bar key={`bar-${idx}`} bar={bar} />
        ))}
      </BarContainer>
    </TrackWrapper>
  );
};

export default Track;
