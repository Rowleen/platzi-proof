import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FaMusic, FaStar } from "react-icons/fa";

import { getLyric } from "api/client";
import { setLyric, isLoading } from "actions";

import { GenresList } from "components";

import "styles/components/track.styl";

const mapDispatchToProps = (dispatch) => ({
  setLyric: (lyric) => dispatch(setLyric(lyric)),
  isLoading: (boolean) => dispatch(isLoading(boolean)),
});

const Track = ({
  artist,
  genres,
  id,
  isLoading,
  name,
  rating,
  setLyric,
  updateFilter,
}) => {
  const handleOnGetLyric = (id) => {
    isLoading(true);

    getLyric(id)
      .then((response) => {
        if (response.status === 200 && response.data) {
          setLyric(response.data);
        } else {
          setLyric({});
        }
      })
      .then(() => isLoading(false))
      .catch((error) => {
        console.log(error);
        isLoading(false);
      });
  };

  const handleOnPressEnter = (event, id) =>
    event.keyCode === 13 ? handleOnGetLyric(id) : null;

  return (
    <article className="track-wrapper">
      <div
        className="cover"
        onClick={() => handleOnGetLyric(id)}
        tabIndex="0"
        onKeyDown={(event) => handleOnPressEnter(event, id)}
        title={`Song: ${name}`}
        aria-labelledby="songName"
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
  id: PropTypes.number.isRequired,
  isLoading: PropTypes.func,
  name: PropTypes.string,
  rating: PropTypes.number,
  setLyric: PropTypes.func.isRequired,
  updateFilter: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Track);
