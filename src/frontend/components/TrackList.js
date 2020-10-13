import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Track, Pill } from "components";

import "styles/components/trackList.styl";

const TrackList = ({ tracks }) => {
  const [genreFilter, setGenreFilter] = useState(0);
  const [filteredList, setFilteredList] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const list = tracks
      .map((track) =>
        track.track.primary_genres.music_genre_list.filter((genre) => {
          if (
            genre.music_genre &&
            genre.music_genre.music_genre_id === genreFilter
          ) {
            return track;
          }
        })
      )
      .filter((array) => array.length > 0);

    console.log(list);
    console.log(filteredList);

    setFilteredList(list);
  }, [genreFilter]);

  useEffect(() => {
    const newGenres = tracks
      .map((song) => {
        const genreList = song.track.primary_genres.music_genre_list;

        if (genreList.length > 0) {
          return genreList.map((genre) => genre.music_genre.music_genre_name);
        }
      })
      .filter((genre) => genre !== undefined)
      .flat()
      .filter((v, i, a) => a.indexOf(v) === i);

    setGenres(newGenres);
  }, [tracks]);

  let trackList = [];
  if (tracks.length > 0) {
    trackList = tracks.map((result, index) => (
      <Track
        key={index.toString()}
        artist={result.track.artist_name}
        name={result.track.track_name}
        album={result.track.album_name}
        genres={result.track.primary_genres.music_genre_list}
        updateFilter={setGenreFilter}
      />
    ));
  }

  return (
    <>
      <div className="genres-wrapper">
        <h2 className="section-title">Songs list</h2>
        <div className="genres">
          {genres.map((genre, index) => (
            <Pill key={`genre-${index}`} text={genre} />
          ))}
        </div>
      </div>

      <div className="tracks-grid">{trackList}</div>
    </>
  );
};

TrackList.propTypes = {
  tracks: PropTypes.array,
};

export default TrackList;
