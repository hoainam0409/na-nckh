import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Mainpages from "./components/mainpage/Pages";
import AuthContextProvider from "../src/contexts/authContext";
// import Sidebar from '../src/components/sidebar/SideBar'


function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div className="App">
          {/* <Sidebar/> */}
          <Mainpages />
        </div>
      </Router>
 </AuthContextProvider>
  );
}

export default App;
