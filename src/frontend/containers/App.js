import React, { useState } from "react";
import { searchTrack } from "api/client";
import { FaSearch } from "react-icons/fa";

import { Spinner, TrackList } from "components";

import "styles/app.styl";

const App = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState("desc");
  const [trackList, setTrackList] = useState([]);

  const handleSearch = (event) => {
    setIsLoading(true);
    setTrackList([]);
    event.preventDefault();

    searchTrack(search, sort)
      .then(
        (response) => response.status === 200 && setTrackList(response.data)
      )
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

  return (
    <div className="app">
      <Spinner isLoading={isLoading} />
      <div className="content">
        <form className="form" onSubmit={(event) => handleSearch(event)}>
          <input
            type="text"
            className="input"
            placeholder="Busca tu canción"
            onChange={(event) => handleOnChange(event)}
            value={search}
          />

          <select className="select" onChange={(event) => handleSetSort(event)}>
            <option value="desc">Sort songs</option>
            <option value="desc">Popular</option>
            <option value="asc">Unpopular</option>
          </select>

          <button type="submit" className="button search">
            <FaSearch className="icon" />
          </button>
        </form>

        <TrackList tracks={trackList} />
      </div>
    </div>
  );
};

export default App;
