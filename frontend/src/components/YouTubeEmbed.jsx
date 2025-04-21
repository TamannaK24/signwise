import React from "react";
import PropTypes from "prop-types";
import "./YouTubeEmbed.css";

const YoutubeEmbed = ({ startTime }) => (
  <div className="video-responsive">
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/DBQINq0SsAw?si=bjEWW4cM2vO-T7gn&start=${startTime}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
    startTime: PropTypes.number.isRequired
  };  

export default YoutubeEmbed;