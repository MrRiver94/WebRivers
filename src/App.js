import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Intro from "./containers/IntroWeb/Intro";
import Main from "./containers/Main";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <Router>
      <div className="App">
        {showIntro ? <Intro onComplete={() => setShowIntro(false)} /> : <Main />}
      </div>
    </Router>
  );
}

export default App;
