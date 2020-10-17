/* eslint-disable no-undef */
import React from "react";
import { create } from "react-test-renderer";
import { mount } from "enzyme";

import { Footer } from "components";

describe("Testing <Footer />", () => {
  const footer = mount(<Footer />);

  test("Render of the component", () => {
    expect(footer.length).toEqual(1);
  });

  test("Render of the text", () => {
    expect(footer.find(".footer-content").text()).toEqual(
      "Developed with 💚 for Platzi"
    );
  });

  test("Check if the UI not change", () => {
    const footerUi = create(<Footer />);
    expect(footerUi.toJSON()).toMatchSnapshot();
  });
});
