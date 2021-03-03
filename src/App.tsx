import React from 'react'
import MyLayout from './layout/index'
import { Provider } from 'react-redux'

import store from './store'

const App: React.FC = () => (
  <Provider store={store}>
    <MyLayout />
  </Provider>
)

export default App
