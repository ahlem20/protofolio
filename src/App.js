// src/App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArabicApp from "./arabicApp"; // renamed the import
import EnglishApp from "./englishApp";

function MainApp() {
  // renamed the component
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArabicApp />} />
        <Route path="/english" element={<EnglishApp />} />
      </Routes>
    </Router>
  );
}

export default MainApp; // expcort the renamed component
