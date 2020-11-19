import React from "react";
import PropTypes from "prop-types";
import { FaTimes, FaCaretDown } from "react-icons/fa";
import classNames from "classnames";

import { Pill } from "components";

import "styles/components/filteringList.styl";

const FilteringList = ({
  actualFilter,
  genresList,
  handleOnSort,
  isSorted,
  setGenreFilter,
  title,
  trackListLength,
}) => {
  const pillClear = classNames({
    "pill-clear": true,
    show: genresList.length > 0 && actualFilter !== 0,
  });

  const iconSort = classNames({
    "icon-sort": true,
    desc: isSorted,
  });

  const sortButton = classNames({
    "sort-button": true,
    "show-sort": trackListLength > 0,
  });

  let genres = [];
  if (genresList.length > 0) {
    genres = genresList.map((genre, index) => (
      <Pill
        key={`genre-${index}`}
        genre={genre}
        genreName={genre.music_genre_name}
        genreId={genre.music_genre_id}
        handleOnClick={setGenreFilter}
      />
    ));
  }

  return (
    <div className="genres-wrapper">
      <h2 className="section-title">{title}</h2>

      <div className="genres">
        {genres.length > 0 ? genres : "There arent genres"}

        <span className={pillClear} onClick={() => setGenreFilter(0)}>
          Clear <FaTimes className="icon-times" />
        </span>
      </div>

      <div className="sorter-wrapper">
        <button className={sortButton} onClick={() => handleOnSort(!isSorted)}>
          Order by rating <FaCaretDown className={iconSort} />
        </button>
      </div>
    </div>
  );
};

FilteringList.propTypes = {
  genresList: PropTypes.array.isRequired,
  actualFilter: PropTypes.number.isRequired,
  setGenreFilter: PropTypes.number.isRequired,
  title: PropTypes.string,
  handleOnSort: PropTypes.func.isRequired,
  isSorted: PropTypes.bool.isRequired,
  trackListLength: PropTypes.number.isRequired,
};

export default FilteringList;
