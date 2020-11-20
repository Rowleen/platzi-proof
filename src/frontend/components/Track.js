import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FaMusic, FaStar } from "react-icons/fa";

import { getLyric } from "api/client";
import { setLyric, setFilter, setLoading } from "actions";

import { GenresList } from "components";

import "styles/components/track.styl";

const mapDispatchToProps = (dispatch) => ({
  setLyric: (lyric) => dispatch(setLyric(lyric)),
  setLoading: (boolean) => dispatch(setLoading(boolean)),
  setFilter: (filter) => dispatch(setFilter(filter)),
});

const Track = ({
  artist,
  genres,
  id,
  setLoading,
  name,
  rating,
  setFilter,
  setLyric,
}) => {
  const handleOnGetLyric = (id) => {
    setLoading(true);

    getLyric(id)
      .then((response) => {
        if (response.status === 200 && response.data) {
          setLyric(response.data);
        } else {
          setLyric({});
        }
      })
      .then(() => setLoading(false))
      .catch((error) => {
        console.log(error);
        setLoading(false);
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
          <GenresList list={genres} setGenre={setFilter} />
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
  setLoading: PropTypes.func,
  name: PropTypes.string,
  rating: PropTypes.number,
  setFilter: PropTypes.func,
  setLyric: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Track);
