const React = require('react');
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Reviews from "../reviews/reviewsWidget.jsx";

describe("Review Widge Component", function () {
  it("should render reviews widget", function () {
    let { getByText } = render(<Reviews reviews={[]}/>);
    expect(screen.getByText("Reviews Widget")).toBeInTheDocument();
  });
});