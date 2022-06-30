import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Mainpages from "./components/mainpage/Pages";
import AuthContextProvider from "./contexts/AuthContext";
import ThongbaochungContextProvider from "./contexts/ThongbaochungContext";
import CapDeTaiContextProvider from "./contexts/CapDeTaiContext";
import DotDangKyContextProvider from "./contexts/DotDangKyContext";
import DeTaiSVContextProvider from "./contexts/DeTaiSVContext";
import DeTaiCBContextProvider from "./contexts/DeTaiCBContext";
import KhoaContextProvider from "./contexts/KhoaContext";
import LinhVucContextProvider from "./contexts/LinhVucContext";
import UserContextProvider from "./contexts/UserContext";
import ChucVuContextProvider from "./contexts/ChucVuContext";
import HoiDongContextProvider from "./contexts/HoiDongContext";
import LoaiHĐContextProvider from "./contexts/LoaiHĐContext";

function App() {
  return (
    <AuthContextProvider>
      <ThongbaochungContextProvider>
        <CapDeTaiContextProvider>
          <DotDangKyContextProvider>
            <DeTaiSVContextProvider>
              <DeTaiCBContextProvider>
                <HoiDongContextProvider>
                <UserContextProvider>
                  <LoaiHĐContextProvider>
                  <KhoaContextProvider>
                    <LinhVucContextProvider>
                      <ChucVuContextProvider>
                        <Router>
                          <Mainpages />
                        </Router>
                      </ChucVuContextProvider>
                    </LinhVucContextProvider>
                  </KhoaContextProvider>
                  </LoaiHĐContextProvider>
                </UserContextProvider>
                </HoiDongContextProvider>
              </DeTaiCBContextProvider>
            </DeTaiSVContextProvider>
          </DotDangKyContextProvider>
        </CapDeTaiContextProvider>
      </ThongbaochungContextProvider>
    </AuthContextProvider>
  );
}

export default App;
