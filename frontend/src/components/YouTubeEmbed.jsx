import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./YouTubeEmbed.css";

const YoutubeEmbed = ({ startTime, endTime }) => {
  const playerRef = useRef(null);
  const intervalRef = useRef(null);
  const videoId = "DBQINq0SsAw";
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const loadPlayer = () => {
    playerRef.current = new window.YT.Player("yt-player", {
      height: "315",
      width: "560",
      videoId,
      playerVars: {
        start: startTime,
        end: endTime,
        controls: 0,
        modestbranding: 1,
        autoplay: 1,
        mute: 1,
        rel: 0,
      },
      events: {
        onReady: (event) => {
          event.target.mute();
          event.target.playVideo();
        },
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.PLAYING) {
            setIsPlaying(true);
            if (!intervalRef.current) {
              intervalRef.current = setInterval(() => {
                const currentTime = playerRef.current.getCurrentTime();
                if (currentTime >= endTime) {
                  playerRef.current.seekTo(startTime);
                }
              }, 500);
            }
          } else if (event.data === window.YT.PlayerState.PAUSED) {
            setIsPlaying(false);
          }
        },
      },
    });
  };

  useEffect(() => {
    const createYTScript = () => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    };

    if (!window.YT) {
      createYTScript();
    }

    let interval = setInterval(() => {
      if (window.YT && window.YT.Player) {
        clearInterval(interval);
        loadPlayer();
      }
    }, 100); // check every 100ms

    return () => {
      clearInterval(interval);
      clearInterval(intervalRef.current);
      playerRef.current?.destroy();
    };
  }, [startTime, endTime]);

  const togglePlay = () => {
    if (!playerRef.current) return;
    const player = playerRef.current;
    const state = player.getPlayerState();
    if (state === window.YT.PlayerState.PLAYING) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  const toggleMute = () => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
    } else {
      playerRef.current.mute();
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="video-wrapper">
      <div className="video-responsive">
        <div id="yt-player"></div>
      </div>
      <div className="controls">
        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
        <button onClick={toggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
      </div>
    </div>
  );
};

YoutubeEmbed.propTypes = {
  startTime: PropTypes.number.isRequired,
  endTime: PropTypes.number.isRequired,
};

export default YoutubeEmbed;