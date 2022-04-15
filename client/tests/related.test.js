/* eslint-disable react/react-in-jsx-scope */
const React = require('react');
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RelatedItems from '../relatedItems/RelatedItems';
import data from './localData.js';


test('related items test', () => {
  render(<RelatedItems relatedArr ={data.relatedProducts} currentProd={data.currentProd}/>);
  const output = screen.getByText(/YOUR OUTFIT/i);
  expect(output).toBeInTheDocument();
});

