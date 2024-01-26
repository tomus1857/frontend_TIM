import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Upewnij się, że importujesz App z właściwej lokalizacji
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
