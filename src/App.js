import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import OcasionalServices from './pages/OcasionalServices';
import Homepage from './pages/Homepage';
import MovingTeam from './pages/MovingTeam';
import MovingServices from './pages/MovingServices';

const App = () => {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={ <Homepage /> } />
                <Route path="/ocasionalservices" element={<OcasionalServices />} />
                <Route path="/movingteam" element={ <MovingTeam />} />
                <Route path="/movingservices" element={ <MovingServices />} />
            </Routes>
        </div>
    );
}

export default App;