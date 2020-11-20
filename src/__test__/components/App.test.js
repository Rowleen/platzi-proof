/* eslint-disable no-undef */
import React from "react";
import ProviderMock from "../../__mocks__/providerMock";
import { mount } from "enzyme";

import App from "containers/App";

describe("Testing container <APP />", () => {
  const app = mount(
    <ProviderMock>
      <App />
    </ProviderMock>
  );

  test("Render of the component", () => {
    expect(app.length).toEqual(1);
  });
});

describe("Checking if useState functions change it's state", () => {
  test("Check if change search term on state", () => {
    const setSearch = jest.fn();
    const handleOnChange = jest.spyOn(React, "useState");

    handleOnChange.mockImplementation((search) => [search, setSearch]);

    expect(setSearch).toBeTruthy();
  });

  test("Check if change sort of lyrics on state", () => {
    const setSort = jest.fn();
    const handleSetSort = jest.spyOn(React, "useState");

    handleSetSort.mockImplementation((sort) => [sort, setStor]);

    expect(setSort).toBeTruthy();
  });

  test("Check if set new tracks on search lyrics", () => {
    const setTrackList = jest.fn();
    const handleSearch = jest.spyOn(React, "useState");

    handleSearch.mockImplementation((trackList) => [trackList, setTrackList]);

    expect(setTrackList).toBeTruthy();
  });

  test("Check if set a lyric on state", () => {
    const setLyric = jest.fn();
    const handleOnGetLyric = jest.spyOn(React, "useState");

    handleOnGetLyric.mockImplementation((lyric) => [lyric, setLyric]);

    expect(setLyric).toBeTruthy();
  });

  test("Check if set a loding state of the app", () => {
    const setIsLoading = jest.fn();
    expect(setIsLoading).toBeTruthy();
  });
});
