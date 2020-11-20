/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import { Spinner } from "components";

describe("Tests of rendering and UI of <Spinner />", () => {
  const spinner = shallow(
    <Spinner isLoading={true} message={"Some text here"} />
  );

  test("Check if the component render", () => {
    expect(spinner.length).toEqual(1);
  });
});
