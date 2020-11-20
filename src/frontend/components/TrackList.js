import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { FilteringList, Track } from "components";

import "styles/components/trackList.styl";

import { setFilter, setGenresList } from "actions";

const mapStateToProps = (state) => ({
  filterGenre: state.filterGenre,
  isLoading: state.isLoading,
  lyricsList: state.lyricsList,
});

const mapDispatchToProps = (dispatch) => ({
  setGenresList: (list) => dispatch(setGenresList(list)),
  setFilter: (filter) => dispatch(setFilter(filter)),
});

const TrackList = ({
  filterGenre,
  handleOnGetLyric,
  lyricsList,
  setGenresList,
}) => {
  const [sortByRating, setSortByRating] = useState(false);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const list = lyricsList.filter((track) =>
      track.track.primary_genres.music_genre_list.some(
        (genre) => genre.music_genre?.music_genre_id === filterGenre
      )
    );

    setFilteredList(list);
  }, [filterGenre]);

  useEffect(() => {
    setFilter(0);
    // Getting all genres from the lyricsList
    const newGenres = lyricsList
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

    // Getting unique genres from genres taken of all lyricsList
    const distinctGenres = Array.from(
      new Set(newGenres.map((genre) => genre.music_genre_id))
    ).map((id) => {
      return {
        music_genre_id: id,
        music_genre_name: newGenres.find((genre) => genre.music_genre_id === id)
          .music_genre_name,
      };
    });

    setGenresList(distinctGenres);
    setSortByRating(false);
  }, [lyricsList]);

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
  if (filterGenre === 0) {
    tracksToList = lyricsList;
  } else {
    tracksToList = filteredList;
  }

  let trackList = [];
  if (lyricsList.length > 0) {
    trackList = tracksToList.map((result, index) => (
      <Track
        album={result.track.album_name}
        artist={result.track.artist_name}
        genres={result.track.primary_genres.music_genre_list}
        id={result.track.track_id}
        key={index.toString()}
        name={result.track.track_name}
        rating={result.track.track_rating}
      />
    ));
  }

  return (
    <>
      <FilteringList
        handleOnSort={handleSortByRating}
        isSorted={sortByRating}
        title={"Genres List"}
        trackListLength={trackList.length}
      />

      <div className="tracks-grid">{trackList}</div>
    </>
  );
};

TrackList.propTypes = {
  filterGenre: PropTypes.number,
  handleOnGetLyric: PropTypes.func,
  lyricsList: PropTypes.array,
  setGenresList: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
