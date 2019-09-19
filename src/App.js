import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Notfound from './screens/notfound';
import Home from './screens/Home';
import Business from './screens/Business';
import Header from './components/header';
import Footer from './components/footer';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className='animsition'>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-business" component={Business} />
            <Route component={Notfound} />
          </Switch>
          <Footer />

        </div>
      </Router>
    )
  }
}



export default App