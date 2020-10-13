import React from "react";
import PropTypes from "prop-types";

import "styles/components/pill.styl";

const Pill = ({ id, text, handleOnClick }) => {
  return (
    <span className="pill" onClick={() => handleOnClick(id)}>
      {text}
    </span>
  );
};

Pill.propTypes = {
  handleOnClick: PropTypes.func,
  id: PropTypes.number,
  text: PropTypes.string.isRequired,
};

export default Pill;
