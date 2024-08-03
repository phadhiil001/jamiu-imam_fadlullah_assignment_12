import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import Footer from "./Footer";

describe("Footer", () => {
  const links = [
    { label: "Twitter", url: "https://twitter.com", disabled: false },
    { label: "Facebook", url: "https://facebook.com", disabled: true },
  ];

  test("renders the footer with default props", () => {
    render(<Footer links={links} />);
    expect(
      screen.getByText("© 2024 FJamiu-Imam. All rights reserved.")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Twitter")).toBeInTheDocument();
    expect(screen.getByLabelText("Facebook")).toBeInTheDocument();
  });

  test("applies the disabled state to links", () => {
    render(<Footer links={links} />);
    expect(screen.getByLabelText("Twitter")).toHaveStyleRule(
      "cursor",
      "pointer"
    );
    expect(screen.getByLabelText("Facebook")).toHaveStyleRule(
      "cursor",
      "not-allowed"
    );
  });

  test("applies the custom background color", () => {
    render(
      <Footer
        links={links}
        backgroundColor="#00ff00"
      />
    );
    expect(screen.getByTestId("footer")).toHaveStyleRule(
      "background-color",
      "#00ff00"
    );
  });

  test("hides the footer when isVisible is false", () => {
    render(
      <Footer
        links={links}
        isVisible={false}
      />
    );
    expect(screen.getByTestId("footer")).toHaveStyleRule("display", "none");
  });
});
