import React from 'react'
import ReactDOM from 'react-dom/client'
import { SequencerProvider } from './utils/sequencerStore'
import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SequencerProvider>
      <App />
    </SequencerProvider>
  </React.StrictMode>,
)
