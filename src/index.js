import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'

import { Provider } from './context/context'
import App from './App'
import './index.css'

ReactDOM.render(
    <SpeechProvider appId='839caea9-d17a-4a20-8b41-10ca0e92197c' language='en-US'>
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
 document.getElementById('root'),
);