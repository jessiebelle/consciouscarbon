import React from "react";
import axios from "axios";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
// import Home component
import Home from "./home/homepage";
import FeaturesPage from "./features/featuresPage";


axios.defaults.baseURL = process.env.REACT_APP_API_URL


function App() {
    return (
      <>
        {/* This is the alias of BrowserRouter i.e. Router */}
        <Router>
          <Routes>
            {/* This route is for home component
            with exact path "/", in component props
            we passes the imported component*/}
            <Route path="/" element={<Home />} />
              <Route path="/Features" element={<FeaturesPage />} />

          </Routes>
        </Router>
      </>
    );
  }

  export default App;