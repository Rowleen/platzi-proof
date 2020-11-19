import React from "react";
import PropTypes from "prop-types";

import { Pill } from "components";

import "styles/components/genresList.styl";

const GenresList = ({ list, setGenre }) => {
  return (
    <ul className="genres-list">
      {list.map((genre, index) => (
        <Pill
          key={`genre-${index}`}
          genre={genre}
          genreName={genre.music_genre_name}
          genreId={genre.music_genre_id}
          handleOnClick={setGenre}
        />
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  list: PropTypes.array.isRequired,
  setGenre: PropTypes.func,
};

export default GenresList;
