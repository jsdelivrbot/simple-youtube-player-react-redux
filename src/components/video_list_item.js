import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img
            src={video.snippet.thumbnails.default.url}
            alt={video.snippet.title}
            className="media-object"
          />
        </div>
      </div>

      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
        <p>{video.snippet.description}</p>
      </div>
    </li>
  );
};

export default VideoListItem;
