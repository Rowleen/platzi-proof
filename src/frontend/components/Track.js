import React from "react";
import PropTypes from "prop-types";
import { FaMusic, FaStar } from "react-icons/fa";

import { Pill } from "components";

import "styles/components/track.styl";

const Track = ({ artist, updateFilter, name, genres, rating }) => {
  return (
    <article className="track-wrapper">
      <div className="cover">
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
              key={index.toString()}
              className="genre"
              handleOnClick={updateFilter}
              id={genre.music_genre.music_genre_id}
              genre={genre.music_genre}
            />
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
  updateFilter: PropTypes.func,
  rating: PropTypes.number,
};

export default Track;
