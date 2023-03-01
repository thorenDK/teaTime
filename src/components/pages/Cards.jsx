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

export default function Cards({ cards }) {
  // console.log(el);
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
  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={cards.img}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cards.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cards.description}
          </Typography>
        </CardContent>
        <CardActions>
          <ThemeProvider theme={theme}>
            <Button href="/" size="small">Вернуться к карте</Button>
            <Button href={`/comments/all/${cards?.id}`} size="small" color="secondary">Зайти в комментарии</Button>
          </ThemeProvider>
        </CardActions>
      </Card>
    </Grid>
  );
}

// <div className="card" style={{ width: '18rem' }}>
//   <img src={el.img} className="card-img-top" alt="..." />
//   <div className="card-body">
//     <h5 className="card-title">{el.name}</h5>
//     <p className="card-text">{el.description}</p>
//     <a href="/" className="btn btn-primary">Вернуться к карте</a>
//     <a href={`/comments/all/${el?.id}`} className="btn btn-primary">Зайти в комментарии</a>
//   </div>
// </div>
