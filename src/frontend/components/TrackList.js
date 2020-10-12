import React from "react";
import PropTypes from "prop-types";

import "styles/components/trackList.styl";

const TrackList = ({ tracks }) => {
  let trackList;
  if (tracks.length > 0) {
    trackList = tracks.map((track, index) => {});
  }

  return (
    <>
      <h2 className="section-title">Songs list</h2>
      <div className="tracks-grid">{trackList}</div>
    </>
  );
};

TrackList.propTypes = {
  tracks: PropTypes.array,
};

export default TrackList;
