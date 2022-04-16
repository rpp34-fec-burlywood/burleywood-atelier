/* eslint-disable react/react-in-jsx-scope */
const React = require('react');
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionsAndAnswers from '../Q&A/QuestionsAndAnswers';
import data from './qAndAData';


describe("Renders Q and A component", () => {
  test("should render with all the questions in the dom", () => {
    render(
      <QuestionsAndAnswers
        currProd={data.currProd}
        questionsList={data.questionsData}
      />
    );
    data.questionsData.results.forEach((question) => {
      expect(screen.getByText(question.question_body)).toBeInTheDocument();
    })
  });

  test("should render with Q and A title in the dom", () => {
    render(
      <QuestionsAndAnswers
        currProd={data.currProd}
        questionsList={data.questionsData}
      />
    );
    expect(screen.getByText('Questions & Answers')).toBeInTheDocument();

  });
});