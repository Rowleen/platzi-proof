import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "styles/components/spinner.styl";

const Spinner = ({ isLoading }) => {
  const spinnerWrapper = classNames({
    "spinner-wrapper": true,
    show: isLoading,
  });
  return (
    <div className={spinnerWrapper}>
      <div className="spinner-container">
        <div className="spin" id="loader"></div>
        <div className="spin" id="loader2"></div>
        <div className="spin" id="loader3"></div>
        <div className="spin" id="loader4"></div>
        <span className="info">LOADING</span>
      </div>
    </div>
  );
};

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Spinner;
