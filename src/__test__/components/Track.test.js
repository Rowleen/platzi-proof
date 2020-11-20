/* eslint-disable no-undef */
import React from "react";
import ProviderMock from "../../__mocks__/providerMock";
import { shallow } from "enzyme";
import genresMock from "../../__mocks__/genresMock";

import { Track } from "components";

describe("Testing renderin and UI of <Track />", () => {
  const getLyric = jest.fn();
  const track = shallow(
    <ProviderMock>
      <Track id={1} genres={genresMock} getLyric={getLyric} />
    </ProviderMock>
  );

  test("Check if the component render", () => {
    expect(track.length).toEqual(1);
  });
});
