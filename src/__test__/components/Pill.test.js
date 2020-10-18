/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import genresMock from "../../__mocks__/genresMock";
import { Pill } from "components";

describe("Check rendering of the component and UI", () => {
  const pill = shallow(<Pill genre={genresMock[0]} />);

  test("Check if the component render", () => {
    expect(pill.length).toEqual(1);
  });
});

describe("Check if functions are called clicking", () => {
  const setGenre = jest.fn();
  const pill = shallow(<Pill genre={genresMock[0]} handleOnClick={setGenre} />);

  test("Check if the set genre function it's called when click", () => {
    pill.find(".pill").simulate("click");
    expect(setGenre).toHaveBeenCalledTimes(1);
  });
});
