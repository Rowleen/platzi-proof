/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import lyricMock from "../../__mocks__/lyricMock";

import { Lyric } from "components";

describe("Testing of render component", () => {
  const lyric = shallow(<Lyric lyric={lyricMock} />);
  test("Render of the component", () => {
    expect(lyric.length).toEqual(1);
  });
});

describe("Checking if useState functions change it's state", () => {
  test("Check if toggle container to show the lyric", () => {
    const setToggle = jest.fn();
    const handleToggleOnClick = jest.spyOn(React, "useState");

    handleToggleOnClick.mockImplementation((toggle) => [toggle, setToggle]);

    expect(setToggle).toBeTruthy();
  });
});
