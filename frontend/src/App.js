import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Route exact path='/' component={HomeScreen} />
        <Route path='/product' component={ProductScreen} />
      </Router>
    </>
  );
}

export default App

