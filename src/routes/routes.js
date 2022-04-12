import React from "react";
import { Home, Movie, Login, Register, Favoritos } from "../screens";
import { Routes, Route } from "react-router-dom";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:idFilme" element={<Movie />} />
      <Route path="favoritos" element={<Favoritos />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}
