import React from "react";
import PropTypes from "prop-types";

import "styles/components/genresList.styl";

const GenresList = ({ list, setGenre }) => {
  return (
    <div className="genres-list">
      {list.map((genre, index) => (
        <button
          key={`genre-${index}`}
          className="genre"
          onClick={() =>
            setGenre(
              parseInt(genre.music_genre_id || genre.music_genre.music_genre_id)
            )
          }
          type="button"
        >
          {genre.music_genre_name || genre.music_genre.music_genre_name}
        </button>
      ))}
    </div>
  );
};

GenresList.propTypes = {
  list: PropTypes.array.isRequired,
  setGenre: PropTypes.func,
};

export default GenresList;
