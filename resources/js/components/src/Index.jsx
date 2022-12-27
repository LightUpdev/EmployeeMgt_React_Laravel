import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { AppProvider } from './ContextApi';


if (document.getElementById('employeeApp')) {
    const Index = ReactDOM.createRoot(document.getElementById("employeeApp"));

    Index.render(
        <React.StrictMode>
            <AppProvider>
            <App/>
            </AppProvider> 
        </React.StrictMode>
    )
}