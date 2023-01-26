import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import NavBar from './ui/NavBar';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';
import OneCardPage from './pages/OneCardPage';
import CardForm from './pages/CardForm';

export default function App({ user, cards }) {
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        <Route path="/fdfd" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/api/OneCard" element={<CardForm cards={cards} />} />
      </Routes>
    </div>
  );
}
