import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import CommunautaireHome from "./communautaireMissionnaireGalileen/views/CommunautaireHome"
import JoindreView from './communautaireMissionnaireGalileen/views/JoindreView';
import PastoraleHome from './pastorale/views/PastoraleHome';
import PastoraleContact from './pastorale/views/PastoraleContact';
import PastoraleRapport from './pastorale/views/PastoraleRapport';
import PastoraleDocument from './pastorale/views/PastoraleDocument'

function App() {
  return (
    <React.StrictMode>
        <Router>
          <Routes>
              <Route path='/' element={<CommunautaireHome />} />
              <Route path='/joindre' element={<JoindreView />} />
              <Route path='/pastorale' element={<PastoraleHome />} />
              <Route path='/pastorale/contact' element={<PastoraleContact />} />
              <Route path='/rapports/:type' element={<PastoraleRapport />} />
              <Route path='/documents' element={<PastoraleDocument />} />
          </Routes>
        </Router>
    </React.StrictMode>
  );
}

export default App;
