import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import CommunautaireHome from "./communautaireMissionnaireGalileen/views/CommunautaireHome"
import JoindreView from './communautaireMissionnaireGalileen/views/JoindreView';

function App() {
  return (
    <React.StrictMode>
        <Router>
          <Routes>
              <Route path='/' element={<CommunautaireHome />} />
              <Route path='/joindre' element={<JoindreView />} />
          </Routes>
        </Router>
    </React.StrictMode>
  );
}

export default App;
