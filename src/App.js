import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar';
import Homepage from './Homepage';
import Footer from './Components/Footer';

const App = () => {

    return (
        <div className="App">
            <Navbar />
            <Homepage />
            <Footer />
        </div>
    );
}

export default App;