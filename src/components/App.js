import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import CommunautaireHome from "./communautaireMissionnaireGalileen/views/CommunautaireHome"
import JoindreView from './communautaireMissionnaireGalileen/views/JoindreView';
import PastoraleHome from './pastorale/views/PastoraleHome';
import PastoraleContact from './pastorale/views/PastoraleContact';
import PastoraleRapport from './pastorale/views/PastoraleRapport';
import PastoraleDocument from './pastorale/views/PastoraleDocument';
import CrmaLeeaciHome from './crmaLeeaci/views/CrmaLeeaciHome';
import CrmaLeeaciInscription from './crmaLeeaci/views/CrmaLeeaciInscription';
import CrmaLeeaciRegister from './crmaLeeaci/views/CrmaLeeaciRegister';
import CrmaLeeaciLogin from './crmaLeeaci/views/CrmaLeeaciLogin';
import CrmaLeeaciMeditation from './crmaLeeaci/views/CrmaLeeaciMediation';
import CrmaLeeaciCentreAcceuil from './crmaLeeaci/views/CrmaLeeaciCentreAcceuil';
import CrmaLeeaciFormulaireEvenement from './crmaLeeaci/views/CmraLeeaciFormulaireEvenement';
import CrmaLeeaciAbout from './crmaLeeaci/views/CmraLeeaciAbout';
import CrmaAdmission from './crmaLeeaci/views/CmraLeeaciAdmission'
import CommunautaireSecteurs from './communautaireMissionnaireGalileen/views/CommunautaireSecteurs';
import CommunautaireEglises from './communautaireMissionnaireGalileen/views/CommunautaireEglises';

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
              <Route path='/crmaLeeaci' element={<CrmaLeeaciHome />} />
              <Route path='/inscription' element={<CrmaLeeaciInscription />} />
              <Route path='/register' element={<CrmaLeeaciRegister />} />
              <Route path='/login' element={<CrmaLeeaciLogin />} />
              <Route path='/meditation' element={<CrmaLeeaciMeditation />} />
              <Route path='/centreAcceuil' element={<CrmaLeeaciCentreAcceuil />} />
              <Route path='/inscriptionEvenement' element={<CrmaLeeaciFormulaireEvenement />} />
              <Route path='/apropos' element={<CrmaLeeaciAbout />} />
              <Route path='admissions' element={<CrmaAdmission />} />
              <Route path="/secteurs" element={<CommunautaireSecteurs />} />
              <Route path="/eglises" element={<CommunautaireEglises />} />
          </Routes>
        </Router>
    </React.StrictMode>
  );
}

export default App;
