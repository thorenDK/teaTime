import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NavBar from "./ui/NavBar";
import SignUpPage from "./pages/SignUpPage";
import OneCardPage from "./pages/OneCardPage";
import CardForm from "./pages/CardForm";
import Map from "./pages/Map";
import OneMapCardPage from "./pages/OneMapCardPage";
import Comments from "./pages/Comments";
import Profile from "./pages/Profile";

export default function App({ user, cards, tea, comments }) {
  // console.log(tea);
  const [allCards, setAllCards] = useState(cards || []);
  const [allTeas, setAllTeas] = useState(tea || []);
  return (
    <>
      <NavBar user={user} />
      <div>
        <Routes>
          <Route path="/" element={<Map tea={tea} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/api/onecard/:id"
            element={<OneCardPage cards={cards} />}
          />
          <Route
            path="/api/OneCard"
            element={<CardForm allCards={allCards} setAllCards={setAllCards} />}
          />
          <Route
            path="/comments/all/:id"
            element={<Comments comments={comments} user={user} tea={tea} />}
          />
          <Route
            path="/cardMap/:id"
            element={
              <OneMapCardPage
                cards={cards}
                tea={tea}
                setAllTeas={setAllTeas}
                allTeas={allTeas}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}
