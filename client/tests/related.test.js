/* eslint-disable react/react-in-jsx-scope */
const React = require('react');
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RelatedItems from '../relatedItems/RelatedItems';
import data from './localData.js';


test('outfit items test', () => {
  render(<RelatedItems relatedArr ={data.relatedProducts} currentProd={data.currentProd}/>);
  const output = screen.getByText(/YOUR OUTFIT/i);
  expect(output).toBeInTheDocument();
});

test('related items test', () => {
  render(<RelatedItems relatedArr ={data.relatedProducts} currentProd={data.currentProd}/>);
  const output = screen.getByText(/RELATED PRODUCTS/i);
  expect(output).toBeInTheDocument();
});

test('outfit list should have a add button to add outfits', () => {
  render(<RelatedItems relatedArr ={data.relatedProducts} currentProd={data.currentProd}/>);
  const addCard = screen.getByTestId('outfit-add');
  const addText = screen.getByText('Add to Outfit');
  const outfitContainer = screen.getByTestId('outfit-container');
  expect(outfitContainer).toBeInTheDocument();
  expect(addCard).toBeInTheDocument();
  expect(addText).toBeInTheDocument();
})

