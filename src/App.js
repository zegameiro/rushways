import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import OcasionalServices from './pages/OcasionalServices';
import OcasionalServicesConf from './pages/OcasionalServicesConf';
import OcasionalServicesDif from './pages/OcasionalServicesDif';
import Homepage from './pages/Homepage';
import MovingTeam from './pages/MovingTeam';
import MovingServices from './pages/MovingServices';
import MovingServiceNoTeam from './pages/MovingServicesNoTeam';
import MovingServicesNoTeamConf from './pages/MovingServicesNoTeamConf';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';

const App = () => {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={ <Homepage /> } />
                <Route path="/services" element={ <Services />} />
                <Route path="/ocasionalservicesdif" element={ <OcasionalServicesDif />} />
                <Route path="/ocasionalservices" element={ <OcasionalServices />} />
                <Route path="/ocasionalservicesconf" element={ <OcasionalServicesConf />} />
                <Route path="/movingteam" element={ <MovingTeam />} />
                <Route path="/movingservices" element={ <MovingServices />} />
                <Route path="/movingservicesnoteam" element={ <MovingServiceNoTeam />} />
                <Route path="/movingservicesnoteamconf" element={ <MovingServicesNoTeamConf />} />
                <Route path="/aboutus" element={ <AboutUs />} />
            </Routes>
        </div>
    );
}

export default App;