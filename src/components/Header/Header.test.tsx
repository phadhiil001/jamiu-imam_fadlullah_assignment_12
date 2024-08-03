import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import Header from "./Header";

describe("Header", () => {
  const links = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact", disabled: true },
  ];

  test("renders the header with default props", () => {
    render(<Header links={links} />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("applies the disabled state", () => {
    render(
      <Header
        links={links}
        disabled
      />
    );
    expect(screen.getByTestId("header")).toHaveStyleRule("opacity", "0.5");
    expect(screen.getByTestId("header")).toHaveStyleRule("cursor", "not-allowed");
  });

  test("applies the custom background color", () => {
    render(
      <Header
        links={links}
        backgroundColor="#ff0000"
      />
    );
    expect(screen.getByTestId("header")).toHaveStyleRule(
      "background-color",
      "#ff0000"
    );
  });

  test("hides the header when isVisible is false", () => {
    render(
      <Header
        links={links}
        isVisible={false}
      />
    );
    expect(screen.getByTestId("header")).toHaveStyleRule("display", "none");
  });
});
