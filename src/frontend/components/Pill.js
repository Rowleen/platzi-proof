import React from "react";
import PropTypes from "prop-types";

import "styles/components/pill.styl";

const Pill = ({ genre, handleOnClick }) => {
  return (
    <span className="pill" onClick={() => handleOnClick(genre.music_genre_id)}>
      {genre.music_genre_name}
    </span>
  );
};

Pill.propTypes = {
  handleOnClick: PropTypes.func,
  genre: PropTypes.object.isRequired,
};

export default Pill;
