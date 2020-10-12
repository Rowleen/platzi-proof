import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Track } from "components";

import "styles/components/trackList.styl";

const TrackList = ({ tracks }) => {
  const [genreFilter, setGenreFilter] = useState(0);

  let trackList = [];
  if (tracks.length > 0) {
    trackList = tracks.map((result, index) => (
      <Track
        key={index.toString()}
        artist={result.track.artist_name}
        name={result.track.track_name}
        album={result.track.album_name}
        genres={result.track.primary_genres.music_genre_list}
        filter={setGenreFilter}
      />
    ));
  }
  console.log("hola");
  useEffect(() => {
    console.log("entra?");
    trackList = tracks.map((track) => {
      const genreList = track.track.primary_genres.music_genre_list;

      genreList.map((genre) => {
        const id = genre.music_genre.music_genre_id;

        if (id !== undefined && id === genreFilter) {
          <Track
            key={track.toString()}
            artist={track.track.artist_name}
            name={track.track.track_name}
            album={track.track.album_name}
            genres={track.track.primary_genres.music_genre_list}
            filter={setGenreFilter}
          />;
        }
      });
    });
  }, [genreFilter]);

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
