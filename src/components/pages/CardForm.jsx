import React from 'react';
import OneCardPage from './OneCardPage';

export default function CardForm({ cards }) {
    console.log(cards);
  return (
    <div>{cards?.map((card) => <OneCardPage card={card} />)}</div>
  );
}
