import React, { useState } from 'react';
import AddForm from './AddForm';
import OneCardPage from './OneCardPage';

export default function CardForm({ allCards, setAllCards }) {
  return (
    <div>
      <AddForm setAllCards={setAllCards} />
      <div>{allCards?.map((card) => <OneCardPage card={card} />)}</div>
    </div>
  );
}
