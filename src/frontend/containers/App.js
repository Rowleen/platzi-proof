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
  // const handleOnGetLyric = (id) => {
  //   isLoading(true);

  //   getLyric(id)
  //     .then((response) => {
  //       if (response.status === 200 && response.data) {
  //         setLyric(response.data);
  //       } else {
  //         setLyric({});
  //       }
  //     })
  //     .then(() => isLoading(false))
  //     .catch((error) => {
  //       console.log(error);
  //       isLoading(false);
  //     });
  // };

  return (
    <div className="app">
      {(isLoading || isLoading === false) && (
        <Spinner isLoading={isLoading} message="LOADING" />
      )}

      {lyric && <Lyric lyric={lyric} />}

      <div className="content">
        <Searcher />

        {lyricsList.length > 0 && (
          <TrackList tracks={lyricsList} handleOnGetLyric={() => {}} />
        )}
      </div>
    </div>
  );
};

App.propTypes = {
  lyric: PropTypes.object,
  lyricsList: PropTypes.array.isRequired,
  isLoading: PropTypes.func,
};

export default connect(mapStateToProps, null)(App);
