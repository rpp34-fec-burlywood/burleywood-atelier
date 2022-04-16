/* eslint-disable react/react-in-jsx-scope */
const React = require('react');
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionsAndAnswers from '../Q&A/QuestionsAndAnswers';
import data from './qAndAData';


describe("Renders Q and A component", () => {
  test("should render with all the questions", () => {
    render(
      <QuestionsAndAnswers
        currProd={data.currProd}
        questionsList={data.questionsData}
      />
    );
    expect(screen.getByText('Sapiente ea nostrum repudiandae sequi explicabo eos aut quae reprehenderit.')).toBeInTheDocument();

  });
});