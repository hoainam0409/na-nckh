import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Mainpages from "./components/mainpage/Pages";
import AuthContextProvider from "./contexts/AuthContext";
import ThongbaochungContextProvider from "./contexts/ThongbaochungContext";
import CapDeTaiContextProvider from "./contexts/CapDeTaiContext";
import DotDangKyContextProvider from "./contexts/DotDangKyContext";
import DeTaiSVContextProvider from './contexts/DeTaiSVContext'
import KhoaXetDuyetContextProvider from './contexts/KhoaXetDuyetContext'

function App() {
  return (
    <AuthContextProvider>
      <ThongbaochungContextProvider>
        <CapDeTaiContextProvider>
          <DotDangKyContextProvider>
            <DeTaiSVContextProvider>
            < KhoaXetDuyetContextProvider>
            <Router>
            <Mainpages />
          </Router></KhoaXetDuyetContextProvider>
            </DeTaiSVContextProvider>
          </DotDangKyContextProvider>
        </CapDeTaiContextProvider>
      </ThongbaochungContextProvider>
    </AuthContextProvider>
  );
}

export default App;
