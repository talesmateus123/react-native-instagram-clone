import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

import storeConfig from './src/store/storeConfig'
import axios from 'axios'
axios.defaults.baseURL = 'https://lambe-lambe-f961c.firebaseio.com/'

const store = storeConfig()

const Redux = () => (
    <Provider store={store} >
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux)
