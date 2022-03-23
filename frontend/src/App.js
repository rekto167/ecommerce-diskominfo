import React from 'react';
import {SafeAreaView} from 'react-native';

import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';

const App = () => {
  return(
    <SafeAreaView>
      <Products />
    </SafeAreaView>
  )
}

export default App;