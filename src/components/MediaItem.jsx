import React from "react";
import { VideoPlayer } from "./VideoPlayer";
import { Image } from "./Image";

export const MediaItem = ({ fields }) => {
  const { file } = fields;
  const { contentType } = file;

  const isVideo = contentType.includes("video");
  const isImage = contentType.includes("image");

  if (isVideo) return <VideoPlayer {...fields} />;
  if (isImage) return <Image {...fields} />;
};
