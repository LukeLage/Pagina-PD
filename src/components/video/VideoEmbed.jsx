import React from 'react';
import YouTube from 'react-youtube';

const VideoEmbed = () => {
  const videoOptions = {
    height: '800',
    width: '1200',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>
      <YouTube videoId="pmm9AxAAJzg" opts={videoOptions} />
    </div>
  );
};

export default VideoEmbed;
