import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FaSearch } from "react-icons/fa";

import { searchTrack } from "api/client";
import { setLyrics, setLoading } from "actions";

import "styles/components/searcher.styl";

const mapStateToProps = (state) => ({
  lyricsList: state.lyricsList,
});

const mapDispatchToProps = (dispatch) => ({
  setLyrics: (lyricsList) => dispatch(setLyrics(lyricsList)),
  setLoading: (boolean) => dispatch(setLoading(boolean)),
});

const Searcher = ({ lyricsList, setLyrics, setLoading }) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc");
  const [infoText, setInfoText] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    setLoading(true);
    setLyrics([]);

    searchTrack(search, sort)
      .then((response) => {
        if (response.status === 200) {
          setLyrics(response.data);
        }
        if (response.status === 200 && response.data.length === 0) {
          setInfoText(true);
        }
      })
      .then(() => setLoading(false))
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleOnChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSetSort = (event) => {
    const { value } = event.target;
    setSort(value);
  };

  const form = classNames({
    form: true,
    complete: lyricsList.length === 0,
  });

  const welcomeText = classNames({
    "welcome-text": true,
    "hide-welcome": lyricsList.length > 0,
    "info-text": infoText,
  });

  const text = infoText
    ? `Wops! We have not find what are you looking for 😅`
    : `To start, please write the name of your song or any term that have
  the name of the song and click over the magnifying glass button or press enter.`;

  return (
    <form className={form} onSubmit={(event) => handleSearch(event)}>
      <span className="form-elements">
        <input
          aria-label="Search your lyric"
          className="input"
          onChange={(event) => handleOnChange(event)}
          placeholder="Search your lyric here"
          required
          type="text"
          value={search}
        />

        <select
          aria-label="Sort by"
          className="select"
          onChange={(event) => handleSetSort(event)}
        >
          <option value="desc">Sort by</option>
          <option value="desc">Most rated</option>
          <option value="asc">Less rated</option>
        </select>
        <button
          type="submit"
          className="button search"
          aria-label="Search on Lyrics.io"
        >
          <FaSearch className="icon" />
        </button>
      </span>

      <p className={welcomeText}>{text}</p>
    </form>
  );
};

Searcher.propTypes = {
  setLoading: PropTypes.func,
  lyricsList: PropTypes.array.isRequired,
  setLyrics: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Searcher);
