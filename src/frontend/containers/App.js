import React, { useState } from "react";
import { searchTrack } from "api/client";
import { FaSearch } from "react-icons/fa";

import { TrackList } from "components";

import "styles/app.styl";

const App = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc");
  const [trackList, setTrackList] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    searchTrack(search, sort)
      .then(
        (response) => response.status === 200 && setTrackList(response.data)
      )
      .catch((error) => console.log(error));
  };

  const handleOnChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <div className="app">
      <div className="content">
        <form className="form" onSubmit={(event) => handleSearch(event)}>
          <input
            type="text"
            className="input"
            placeholder="Busca tu canción"
            onChange={(event) => handleOnChange(event)}
            value={search}
          />

          <button type="submit" className="button search">
            <FaSearch className="icon" />
          </button>
        </form>

        <TrackList tracks={trackList} setSort={setSort} />
      </div>
    </div>
  );
};

export default App;
