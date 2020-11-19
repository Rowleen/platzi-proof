import React from "react";
import PropTypes from "prop-types";

import "styles/components/genresList.styl";

const GenresList = ({ list, setGenre }) => {
  return (
    <ul className="genres-list">
      {list.map((genre, index) => (
        <li
          key={`genre-${index}`}
          className="pill"
          onClick={() =>
            setGenre(
              parseInt(genre.music_genre_id || genre.music_genre.music_genre_id)
            )
          }
        >
          {genre.music_genre_name || genre.music_genre.music_genre_name}
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  list: PropTypes.array.isRequired,
  setGenre: PropTypes.func,
};

export default GenresList;
