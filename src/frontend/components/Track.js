import React from "react";
import PropTypes from "prop-types";
import { FaRegPlayCircle } from "react-icons/fa";

import "styles/components/track.styl";

const Track = ({ artist, filter, name, genres }) => {
  return (
    <article className="track-wrapper">
      <div className="cover">
        <FaRegPlayCircle className="icon-play" />
        <h3 className="track-title">{name}</h3>
      </div>

      <div className="track-info">
        <p className="artist">{artist}</p>
        <div className="genres">
          {genres.map((genre, index) => (
            <span
              key={index.toString()}
              className="genre"
              onClick={() => filter(genre.music_genre.music_genre_id)}
            >
              {genre.music_genre.music_genre_name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

Track.propTypes = {
  artist: PropTypes.string,
  name: PropTypes.string,
  genres: PropTypes.array,
  filter: PropTypes.func,
};

export default Track;
