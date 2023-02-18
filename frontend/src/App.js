import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Game from "./pages/Game/Game";
import { createContext, useState } from "react";

export const TokenContext = React.createContext();

function App() {
  const [token, setToken] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <TokenContext.Provider value={token}>
              <SignIn setToken={setToken} />
            </TokenContext.Provider>
          }
        ></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/game"
          element={
            <TokenContext.Provider value={token}>
              <Game />
            </TokenContext.Provider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
