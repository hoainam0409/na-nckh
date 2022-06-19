import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Mainpages from "./components/mainpage/Pages";
import AuthContextProvider from "../src/contexts/AuthContext";
import ThongbaochungContextProvider from "../src/contexts/thongbaochungContext";

function App() {
  return (
    <AuthContextProvider>
      <ThongbaochungContextProvider>
        <Router>
          <Mainpages />
        </Router>
      </ThongbaochungContextProvider>
    </AuthContextProvider>
  );
}

export default App;
