/* eslint-disable no-undef */
import { searchTrack, getLyric } from "api/client";
import { trackListMock, getLyricMock } from "../../__mocks__/apiMock";

describe("Checking functions to fetch data", () => {
  test("Search a term and get the response as array", () => {
    fetch.mockResponseOnce(JSON.stringify({ data: trackListMock }));

    searchTrack("hola", "desc").then((response) => {
      return expect(response.data).toEqual(trackListMock);
    });
  });

  test("Get a lyric", () => {
    fetch.mockResponseOnce(JSON.stringify({ data: getLyricMock }));

    getLyric(1245364).then((response) => {
      return expect(response.data).toEqual(getLyricMock);
    });
  });
});
