import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProviderContext } from './store';
import { FoodProvider } from './store/foodContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FoodProvider>
    <ProviderContext>
        <App />
    </ProviderContext>
    </FoodProvider>
);

