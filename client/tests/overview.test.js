const React = require('react');
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Overview from "../overview/overview.jsx";

var state = {
  "currProd": {
    "id": 64627,
    "campus": "hr-rpp",
    "name": "YEasy 350",
    "slogan": "Just jumped over jumpman",
    "description": "These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.",
    "category": "Kicks",
    "default_price": "450.00",
    "created_at": "2022-01-28T00:20:03.466Z",
    "updated_at": "2022-01-28T00:20:03.466Z",
    "features":  [
      {feature: 'Sole', value: 'Rubber'},
      {feature: 'Material', value: 'FullControlSkin'},
      {feature: 'Stitching', value: 'Double Stitch'}
    ]
  },
  "currProdStyles": [
    "{default?: false, name: \"Zebra Stripe\", original_pr…}",
    "{default?: false, name: \"Oreo\", original_price: \"75…}",
    "{default?: false, name: \"Red Supply\", original_pric…}",
    "{default?: true, name: \"White\", original_price: \"45…}",
    "{default?: false, name: \"Black\", original_price: \"9…}",
    "{default?: false, name: \"Pink\", original_price: \"45…}",
    "{default?: false, name: \"Green\", original_price: \"4…}",
    "{default?: false, name: \"Butter\", original_price: \"…}",
    "{default?: false, name: \"Grey\", original_price: \"45…}"
  ],
  "selectedStyle": {
    "style_id": 398234,
    "name": "White",
    "original_price": "450.00",
    "sale_price": null,
    "default?": true,
    "photos": [
      {
        "thumbnail_url": "https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80"
      },
      {
        "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
      },
      {
        "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
      },
      {
        "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      },
      {
        "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
      },
      {
        "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
      },
      {
        "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      },
      {
        "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      }
    ],
    "skus": "{2313358: {…}, 2313359: {…}, 2313360: {…}, 2313361:…}"
  }
}

describe("Renders Overview Component", function () {
  test("should render with Product Information", function () {
    render(
      <Overview
        currProd={state.currProd}
        currProdStyles={state.currProdStyles}
        selectedStyle={state.selectedStyle} />
    );
    expect(screen.getByText(state.currProd.name)).toBeInTheDocument();
    expect(screen.getByText('$' + state.currProd.default_price)).toBeInTheDocument();
    expect(screen.getByText(state.currProd.category)).toBeInTheDocument();
  });
});