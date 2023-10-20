import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IntlProvider } from 'react-intl';
import getMessages from './utils/i18n';

const lang = navigator.language.split(/[-_]/)[0];
const messages = getMessages(lang);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <IntlProvider locale={lang} messages={messages}>
            <App />
        </IntlProvider>
    </React.StrictMode>
);
