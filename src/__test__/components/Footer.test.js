/* eslint-disable no-undef */
import React from "react";
import { mount } from "enzyme";

import { Footer } from "components";

describe("Testing rendering and UI of <Footer />", () => {
  const footer = mount(<Footer />);

  test("Render of the component", () => {
    expect(footer.length).toEqual(1);
  });
});
