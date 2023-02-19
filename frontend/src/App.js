import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

import "./App.css";

import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Game from "./pages/Game/Game";

export const TokenContext = createContext();

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
