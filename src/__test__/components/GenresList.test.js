/* eslint-disable no-undef */
import React from "react";
import { shallow, mount } from "enzyme";
import genresMock from "../../__mocks__/genresMock";
import { GenresList } from "components";

describe("Check rendering of the component and UI", () => {
  const genresList = shallow(<GenresList list={genresMock} />);

  test("Check if the component render", () => {
    expect(genresList.length).toEqual(1);
  });
});

describe("Check if functions are called clicking", () => {
  const setGenre = jest.fn();
  const genresList = mount(
    <GenresList list={genresMock} setGenre={setGenre} />
  );

  test("Check if the set genre function it's called when click", () => {
    const genres = Array.from(genresList.find(".genre"));

    expect(genres.length).toEqual(3);
  });
});
