import React from "react";
import PropTypes from "prop-types";
import { FaMusic, FaStar } from "react-icons/fa";

import { Pill } from "components";

import "styles/components/track.styl";

const Track = ({
  artist,
  genres,
  getLyric,
  id,
  name,
  rating,
  updateFilter,
}) => {
  return (
    <article className="track-wrapper">
      <div className="cover" onClick={() => getLyric(id)}>
        <FaMusic className="icon-lyric" />
        <h3 className="track-title">{name}</h3>
        <div className="rating">
          <FaStar className="icon-stars" />
          <span className="rating-score">{rating}</span>
        </div>
      </div>

      <div className="track-info">
        <p className="artist">{artist}</p>
        <div className="genres-track">
          {genres.map((genre, index) => (
            <Pill
              className="genre"
              genre={genre.music_genre}
              handleOnClick={updateFilter}
              id={genre.music_genre.music_genre_id}
              key={index.toString()}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

Track.propTypes = {
  artist: PropTypes.string,
  filter: PropTypes.func,
  genres: PropTypes.array,
  getLyric: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  rating: PropTypes.number,
  updateFilter: PropTypes.func,
};

export default Track;
