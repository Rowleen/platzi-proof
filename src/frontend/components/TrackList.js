import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Track, Pill } from "components";

import "styles/components/trackList.styl";

const TrackList = ({ tracks }) => {
  const [genreFilter, setGenreFilter] = useState(0);
  const [filteredList, setFilteredList] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const list = tracks.filter((track) =>
      track.track.primary_genres.music_genre_list.some(
        (genre) => genre.music_genre?.music_genre_id === genreFilter
      )
    );

    setFilteredList(list);
  }, [genreFilter]);

  useEffect(() => {
    // Getting all genres from the tracks
    const newGenres = tracks
      .map((song) => {
        const genreList = song.track.primary_genres.music_genre_list;

        if (genreList.length > 0) {
          return genreList.map((genre) => {
            return {
              music_genre_name: genre.music_genre.music_genre_name,
              music_genre_id: genre.music_genre.music_genre_id,
            };
          });
        }
      })
      .filter((genre) => genre !== undefined)
      .flat();

    // Getting unique genres from genres taken of all tracks
    const distinctGenres = Array.from(
      new Set(newGenres.map((genre) => genre.music_genre_id))
    ).map((id) => {
      return {
        music_genre_id: id,
        music_genre_name: newGenres.find((genre) => genre.music_genre_id === id)
          .music_genre_name,
      };
    });

    setGenres(distinctGenres);
  }, [tracks]);

  let tracksToList = [];
  if (genreFilter === 0) {
    tracksToList = tracks;
  } else {
    tracksToList = filteredList;
  }

  let trackList = [];
  if (tracks.length > 0) {
    trackList = tracksToList.map((result, index) => (
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
            <Pill
              key={`genre-${index}`}
              genre={genre}
              handleOnClick={setGenreFilter}
            />
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
