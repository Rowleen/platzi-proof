/* eslint-disable no-undef */
import React from "react";
import { Header } from "components";
import { create } from "react-test-renderer";
import { shallow } from "enzyme";

describe("Testing rendering and UI of <Header />", () => {
  const header = shallow(<Header />);

  test("Render of the component", () => {
    expect(header.length).toEqual(1);
  });

  test("Render of the title", () => {
    expect(header.find(".site-title").text()).toEqual("Lyrics.io");
  });

  test("Check if the UI not change", () => {
    const headerUI = create(<Header />);
    expect(headerUI.toJSON()).toMatchSnapshot();
  });
});
