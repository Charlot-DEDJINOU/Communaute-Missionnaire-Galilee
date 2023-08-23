import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import CommunautaireHome from "./communautaireMissionnaireGalileen/views/CommunautaireHome"

function App() {
  return (
    <React.StrictMode>
        <Router>
          <Routes>
              <Route path='/' element={<CommunautaireHome />} />
          </Routes>
        </Router>
    </React.StrictMode>
  );
}

export default App;
