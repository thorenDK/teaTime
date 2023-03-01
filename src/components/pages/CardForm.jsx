import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import AddForm from './AddForm';
import OneCardPage from './OneCardPage';

export default function CardForm({ allCards, setAllCards }) {
  return (
    <div>
      <AddForm setAllCards={setAllCards} />
      <div>
        <Grid id="top-row" container spacing={5}>
          {allCards?.map((card) => (
            <OneCardPage
              card={card}
              key={card.id}
              allCards={allCards}
              setAllCards={setAllCards}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
}
