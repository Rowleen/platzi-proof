import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FaTimes, FaCaretDown } from "react-icons/fa";
import classNames from "classnames";

import { GenresList } from "components";

import "styles/components/filteringList.styl";

import { setFilter } from "actions";

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  genresList: state.genresList,
  filterGenre: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
});

const FilteringList = ({
  filterGenre,
  genresList,
  handleOnSort,
  isSorted,
  setFilter,
  title,
  trackListLength,
}) => {
  const pillClear = classNames({
    "pill-clear": true,
    show: genresList.length > 0 && filterGenre !== 0,
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
        <GenresList list={genresList} setGenre={setFilter} />
        <button className={pillClear} onClick={() => setFilter(0)}>
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
  filterGenre: PropTypes.number,
  setFilter: PropTypes.func.isRequired,
  title: PropTypes.string,
  handleOnSort: PropTypes.func.isRequired,
  isSorted: PropTypes.bool.isRequired,
  trackListLength: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilteringList);
