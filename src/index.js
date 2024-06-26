import { createRoot } from 'react-dom/client';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// project imports
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { store } from 'store';

// style + assets
import 'assets/scss/style.scss';
import config from './config';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// ==============================|| REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <BrowserRouter basename={config.basename}>
      <App />
      <ToastContainer position="bottom-right" draggable theme="colored" closeOnClick />
    </BrowserRouter>
    <SpeedInsights />
    <Analytics />
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
