import React from "react";
import PropTypes from "prop-types";
import { FaTimes, FaCaretDown } from "react-icons/fa";
import classNames from "classnames";

import { GenresList } from "components";

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

  return (
    <div className="genres-wrapper">
      <h2 className="section-title">{title}</h2>

      <div className="genres">
        <GenresList list={genresList} setGenre={setGenreFilter} />
        <button className={pillClear} onClick={() => setGenreFilter(0)}>
          Clear <FaTimes className="icon-times" />
        </button>
      </div>

      <div className="sorter-wrapper">
        <button
          type="button"
          className={sortButton}
          onClick={() => handleOnSort(!isSorted)}
        >
          Order by rating <FaCaretDown className={iconSort} />
        </button>
      </div>
    </div>
  );
};

FilteringList.propTypes = {
  genresList: PropTypes.array.isRequired,
  actualFilter: PropTypes.number.isRequired,
  setGenreFilter: PropTypes.func.isRequired,
  title: PropTypes.string,
  handleOnSort: PropTypes.func.isRequired,
  isSorted: PropTypes.bool.isRequired,
  trackListLength: PropTypes.number.isRequired,
};

export default FilteringList;
