import React from "react";
import PropTypes from "prop-types";

import { Track } from "components";

import "styles/components/trackList.styl";

const TrackList = ({ tracks }) => {
  let trackList;
  if (tracks.length > 0) {
    trackList = tracks.map((result, index) => (
      <Track
        key={index.toString()}
        artist={result.track.artist_name}
        name={result.track.track_name}
        album={result.track.album_name}
        genres={result.track.primary_genres.music_genre_list}
      />
    ));
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
