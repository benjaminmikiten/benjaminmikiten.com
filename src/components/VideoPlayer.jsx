import React from "react";
import styled from "styled-components";

const StyledVideoPlayer = styled.div`
  width: 100%;
  video {
    width: 100%;
  }
`;

export const VideoPlayer = ({ file, title }) => {
  return (
    <StyledVideoPlayer>
      <video controls playsInline src={file.url} />
    </StyledVideoPlayer>
  );
};
