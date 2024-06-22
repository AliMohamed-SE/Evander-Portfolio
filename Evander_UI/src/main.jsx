import React from 'react'
import ReactDOM from 'react-dom/client'
// Styles
import './assets/Styles/index.css'
// Bootstrap & MBD & Font Awesome
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add all icons to the library so you can use them throughout your app
library.add(fas);
// Components
import App from './Components/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
