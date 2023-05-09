import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import OcasionalServices from './pages/OcasionalServices';
import OcasionalServicesConf from './pages/OcasionalServicesConf';
import Homepage from './pages/Homepage';
import MovingTeam from './pages/MovingTeam';
import MovingServices from './pages/MovingServices';
import Services from './pages/Services';

const App = () => {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={ <Homepage /> } />
                <Route path="/services" element={ <Services />} />
                <Route path="/ocasionalservices" element={ <OcasionalServices />} />
                <Route path="/ocasionalservicesconf" element={ <OcasionalServicesConf />} />
                <Route path="/movingteam" element={ <MovingTeam />} />
                <Route path="/movingservices" element={ <MovingServices />} />
            </Routes>
        </div>
    );
}

export default App;