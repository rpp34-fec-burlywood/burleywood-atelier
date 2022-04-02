const React = require('react');
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../app.jsx";

describe("App Component", function () {
  test("should render with title", function () {
    render(<App />);

    expect(screen.getByText('Starter app')).toBeInTheDocument();
  });

  test('true is truthy', () => {
    expect(true).toBe(true);
  });
});
//derzan's test
describe("App Component", function () {
  it("should have starter app message", function () {
    let { getByText } = render(<App />);
    expect(screen.getByText("Starter app")).toMatchInlineSnapshot(`
      <h1>
        Starter app
      </h1>
    `);
  });
});