import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';

import routes from './routes';


const App = () => {
    let buffer = "";
    const routing = useRoutes(routes);

    return (
        <div className="App">
            {routing}
        </div>
    );
}

export default App;