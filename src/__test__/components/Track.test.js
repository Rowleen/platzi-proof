/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import genresMock from "../../__mocks__/genresMock";

import { Track, Pill } from "components";

describe("Testing renderin and UI of <Track />", () => {
  const getLyric = jest.fn();
  const track = shallow(
    <Track id={1} genres={genresMock} getLyric={getLyric} />
  );

  test("Check if the component render", () => {
    expect(track.length).toEqual(1);
  });

  test("Check if the component render the genres", () => {
    expect(track.find(Pill)).toHaveLength(3);
  });
});

describe("Check if functions works", () => {
  const getLyric = jest.fn();
  const track = shallow(
    <Track id={1} genres={genresMock} getLyric={getLyric} />
  );

  test("Check if on clicking called a function to get a lyric", () => {
    track.find(".cover").simulate("click");
    expect(getLyric).toHaveBeenCalledTimes(1);
  });
});
