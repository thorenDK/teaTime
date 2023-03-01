/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";
import React, { useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function OneCardPage({ card, setAllCards }) {
  const [change, setChange] = useState({ card });
  const [click, setClick] = useState(false);
  const [input, setInput] = useState(card.description);
  const deleteHandler = (id) => {
    axios.delete(`/api/OneCard/${id}`);
    setAllCards((prev) => prev.filter((el) => el.id !== id));
  };
  const editHandler = (id) => {
    setClick(!click);
    if (click) {
      axios.put(`/api/OneCardEdit/${id}`, { description: input });
      // , {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name: change }),
      // });
      // const data = await response.json();
      // setInput((prev) => prev);
    }
  };
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#f3e5f5",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#ce93d8",
      },
    },
  });
  const outHandler = () => {
    window.location = `/comments/all/${card?.id}`;
  };
  const stopEditHandler = () => {
    setClick(!click);
    setInput(card.description);
  };
  return (
    <>
      {/* <div className="col-3">
        <div className="card" style={{ width: '18rem' }}>
          <img src={card.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{card.name}</h5>
            {!click ? <p className="card-text">{input}</p>
              : <input style={{ width: '100%' }} onChange={changeHandler} type="text" className="text" value={input} />}
            <button type="button" onClick={() => deleteHandler(card.id)} className="btn btn-primary">Удалить карточку</button>
            <button type="submit" onClick={() => editHandler()} className="btn btn-primary">Поменять карточку</button>
            <a href={`/comments/all/${card.id}`} className="btn btn-primary">Перейти в комментарии</a>
          </div>
        </div>
      </div> */}
      <Grid item xs={5}>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia sx={{ height: 300 }} image={card.img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.name}
            </Typography>

            {!click ? (
              <Typography variant="body2" color="text.secondary">
                {input}
              </Typography>
            ) : (
              <>
                <TextField
                  style={{ width: "100%" }}
                  onChange={changeHandler}
                  type="text"
                  className="text"
                  value={input}
                  multiline
                  rows={4}
                />
                {/* <input /> */}
              </>
            )}
          </CardContent>
          <CardActions>
            <ThemeProvider theme={theme}>
              {!click ? (
                <Button
                  type="button"
                  onClick={() => deleteHandler(card.id)}
                  variant="contained"
                  size="small"
                >
                  Удалить карточку
                </Button>
              ) : (
                <Button
                  type="submit"
                  onClick={() => stopEditHandler()}
                  variant="contained"
                  size="small"
                >
                  Отменить изменения
                </Button>
              )}
              <Button
                type="submit"
                onClick={() => editHandler(card.id)}
                variant="contained"
                size="small"
              >
                Поменять карточку
              </Button>
              {!click ? (
                <Button
                  type="submit"
                  onClick={() => outHandler()}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  Перейти в комментарии
                </Button>
              ) : null}
            </ThemeProvider>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
// href={`/comments/all/${card?.id}`}
