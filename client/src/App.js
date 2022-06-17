import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Mainpages from "./components/mainpage/Pages";
import { DataProvider } from "./GlobalState";
// import Sidebar from '../src/components/sidebar/SideBar'


function App() {
  return (
    // <DataProvider>
      <Router>
        <div className="App">
          {/* <Sidebar/> */}
          <Mainpages />
        </div>
      </Router>
    // </DataProvider>
  );
}

export default App;
