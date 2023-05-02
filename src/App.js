import React from 'react';

import Navbar from './Components/Navbar';
import Homepage from './Homepage';

const App = () => {

    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Homepage />
            </div>
        </div>
    );
}

export default App;