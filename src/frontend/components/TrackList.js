import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { FilteringList, Track } from "components";

import "styles/components/trackList.styl";

const TrackList = ({ handleOnGetLyric, tracks }) => {
  const [genreFilter, setGenreFilter] = useState(0);
  const [sortByRating, setSortByRating] = useState(false);
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
    setGenreFilter(0);
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
    setSortByRating(false);
  }, [tracks]);

  const handleSortByRating = (boolean) => {
    let list = [];
    if (boolean) {
      list = tracksToList.sort((a, b) =>
        a.track.track_rating > b.track.track_rating ? 1 : -1
      );
    } else {
      list = tracksToList.sort((a, b) =>
        a.track.track_rating < b.track.track_rating ? 1 : -1
      );
    }
    setFilteredList(list);
    setSortByRating(boolean);
  };

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
        album={result.track.album_name}
        artist={result.track.artist_name}
        genres={result.track.primary_genres.music_genre_list}
        getLyric={handleOnGetLyric}
        id={result.track.track_id}
        key={index.toString()}
        name={result.track.track_name}
        rating={result.track.track_rating}
        updateFilter={setGenreFilter}
      />
    ));
  }

  return (
    <>
      <FilteringList
        genresList={genres}
        actualFilter={genreFilter}
        setGenreFilter={setGenreFilter}
        title={"Genres List"}
        handleOnSort={handleSortByRating}
        isSorted={sortByRating}
        trackListLength={trackList.length}
      />

      <div className="tracks-grid">{trackList}</div>
    </>
  );
};

TrackList.propTypes = {
  handleOnGetLyric: PropTypes.func,
  tracks: PropTypes.array,
};

export default TrackList;
