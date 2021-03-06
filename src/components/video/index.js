import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

export default function Video() {
  return (
    <VideoWrapper>
      <VideoPlayer src="/videos/video.mp4" />
    </VideoWrapper>
  );
}

const VideoWrapper = styled.div`
  width: 580px;
  height:auto;
  margin-top: -150px;
  -webkit-box-shadow: 10px 10px 56px 0px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 10px 10px 56px 0px rgba(0, 0, 0, 0.38);
  box-shadow: 10px 10px 56px 0px rgba(0, 0, 0, 0.38);
`;

const VideoPlayer = styled.video`
  width: 580px;
  height: auto;
`;
