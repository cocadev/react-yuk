import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Notfound from './screens/notfound';
import Home from './screens/Home';
import Business from './screens/Business';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className='animsition'>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-business" component={Business} />

            {/* <Route exact path="/learn" component={Learn} /> */}
            {/* <Route path="/about" component={About} /> */}
            <Route component={Notfound} />
          </Switch>


        </div>
      </Router>
    )
  }
}



export default App