import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

// import 'normalize.css/normalize.css'
import './index.css'

import Provider from './context/context'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
