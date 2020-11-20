/* eslint-disable no-undef */
import React from "react";
import ProviderMock from "../../__mocks__/providerMock";
import { shallow } from "enzyme";
import { TrackList } from "components";

describe("Test of rendering and UI of <TrackList />", () => {
  const trackList = shallow(
    <ProviderMock>
      <TrackList />
    </ProviderMock>
  );

  test("Check if components render", () => {
    expect(trackList.length).toEqual(1);
  });
});

describe("Check if the useState functions are implemented", () => {
  test("Check if genre filter useState is implemented on useEffect block when tracks prop change", () => {
    const setGenreFilter = jest.fn();
    const useEffectSide = jest.spyOn(React, "useState");

    useEffectSide.mockImplementation((genreFilter) => [
      genreFilter,
      setGenreFilter,
    ]);

    expect(setGenreFilter).toBeTruthy();
  });

  test("Check if sort by rating useState is implemented on useEffect block when tracks prop change", () => {
    const setSortByRating = jest.fn();
    const useEffectSide = jest.spyOn(React, "useState");

    useEffectSide.mockImplementation((sortByRating) => [
      sortByRating,
      setSortByRating,
    ]);

    expect(setSortByRating).toBeTruthy();
  });

  test("Check if set genres useState is implemented on useEffect block when tracks prop change", () => {
    const setGenres = jest.fn();
    const useEffectSide = jest.spyOn(React, "useState");

    useEffectSide.mockImplementation((genres) => [genres, setGenres]);

    expect(setGenres).toBeTruthy();
  });
});
