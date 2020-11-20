import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Lyric, Searcher, Spinner, TrackList } from "components";

import "styles/app.styl";

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  lyric: state.lyric,
  lyricsList: state.lyricsList,
});

const App = ({ lyric, lyricsList, isLoading }) => {
  return (
    <div className="app">
      {(isLoading || isLoading === false) && (
        <Spinner isLoading={isLoading} message="LOADING" />
      )}

      {lyric && <Lyric lyric={lyric} />}

      <div className="content">
        <Searcher />

        {lyricsList.length > 0 && <TrackList tracks={lyricsList} />}
      </div>
    </div>
  );
};

App.propTypes = {
  lyric: PropTypes.object,
  lyricsList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

export default connect(mapStateToProps, null)(App);
