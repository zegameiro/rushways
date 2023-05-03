import React from 'react';

import Navbar from './Components/Navbar';
import Homepage from './Homepage';
import Footer from './Components/Footer';

const App = () => {

    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Homepage />
            </div>
            <Footer />
        </div>
    );
}

export default App;