import React from "react";
import PropTypes from "prop-types";

import "styles/components/pill.styl";

const Pill = ({ genreName, genreId, handleOnClick }) => {
  return (
    <li className="pill" onClick={() => handleOnClick(parseInt(genreId))}>
      {genreName}
    </li>
  );
};

Pill.propTypes = {
  handleOnClick: PropTypes.func,
  genreName: PropTypes.string.isRequired,
  genreId: PropTypes.number,
};

export default Pill;
