import React, { useState } from "react";
import classNames from "classnames";
import { getLyric, searchTrack } from "api/client";
import { FaSearch } from "react-icons/fa";

import { Lyric, Spinner, TrackList } from "components";

import "styles/app.styl";

const App = () => {
  const [isLoading, setIsLoading] = useState();
  const [infoText, setInfoText] = useState(false);
  const [lyric, setLyric] = useState({});
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc");
  const [trackList, setTrackList] = useState([]);

  const handleSearch = (event) => {
    setIsLoading(true);
    setTrackList([]);
    event.preventDefault();

    searchTrack(search, sort)
      .then((response) => {
        if (response.status === 200) {
          setTrackList(response.data);
        }
        if (response.status === 200 && response.data.length === 0) {
          setInfoText(true);
        }
      })
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const handleOnGetLyric = (id) => {
    getLyric(id)
      .then((response) => response.status === 200 && setLyric(response.data))
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
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
    complete: trackList.length === 0,
  });

  const welcomeText = classNames({
    "welcome-text": true,
    "hide-welcome": trackList.length > 0,
    "info-text": infoText,
  });

  const text = infoText
    ? `Wops! We have not find what are you looking for 😅`
    : `To start, please write the name of your song or any term that have
  the name of the song and click over the magnifying glass button or press enter.`;

  return (
    <div className="app">
      {(isLoading || isLoading === false) && <Spinner isLoading={isLoading} />}

      {lyric.lyrics_body && <Lyric lyric={lyric} />}

      <div className="content">
        <form className={form} onSubmit={(event) => handleSearch(event)}>
          <span className="form-elements">
            <input
              type="text"
              className="input"
              placeholder="Search your lyric here"
              onChange={(event) => handleOnChange(event)}
              value={search}
              required
            />

            <select
              className="select"
              onChange={(event) => handleSetSort(event)}
            >
              <option value="desc">Sort by</option>
              <option value="desc">Most rated</option>
              <option value="asc">Less rated</option>
            </select>

            <button type="submit" className="button search">
              <FaSearch className="icon" />
            </button>
          </span>

          <p className={welcomeText}>{text}</p>
        </form>

        {trackList.length > 0 && (
          <TrackList tracks={trackList} handleOnGetLyric={handleOnGetLyric} />
        )}
      </div>
    </div>
  );
};

export default App;
