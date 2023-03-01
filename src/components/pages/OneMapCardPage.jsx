/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Cards from './Cards';

export default function OneMapCardPage({ cards }) {
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: purple[500],
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });
  console.log(cards);
  return (
    <>
      {/* <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={cards.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{cards.name}</h5>
            <p className="card-text">{cards.description}</p>
            <a href="/" className="btn btn-primary">Вернуться к карте</a>
            <a href={`/comments/all/${cards?.id}`} className="btn btn-primary">Зайти в комментарии</a>
          </div>
        </div>
      </div> */}
      <div>
        <Grid id="top-row" container spacing={5}>
          <Cards cards={cards}/>
        </Grid>
      </div>
    </>
  );
}
