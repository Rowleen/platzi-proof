import React from "react";
import PropTypes from "prop-types";
import { FaMusic, FaStar } from "react-icons/fa";

import { GenresList } from "components";

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
  const handleOnPressEnter = (event, id) =>
    event.keyCode === 13 ? getLyric(id) : null;

  return (
    <article className="track-wrapper">
      <div
        className="cover"
        onClick={() => getLyric(id)}
        tabIndex="0"
        onKeyDown={(event) => handleOnPressEnter(event, id)}
        title={`Song: ${name}`}
        aria-labeeledby="songName"
      >
        <FaMusic className="icon-lyric" />
        <h3 id="songName" className="track-title">
          {name}
        </h3>
        <div className="rating">
          <FaStar className="icon-stars" />
          <span className="rating-score">{rating}</span>
        </div>
      </div>

      <div className="track-info">
        <p className="artist">{artist}</p>
        <div className="genres-track">
          <GenresList list={genres} setGenre={updateFilter} />
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
