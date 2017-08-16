/**
 * Created by hanyile on 2017/8/7.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './student/style/index.css'
// import App from
import NotFound from './student/components/NotFound'
import HomeBody from './student/components/HomeBody'
import ProfileBody from './student/components/ProfileBody'
import LoginContainer from './student/container/LoginContainer'
import HomeContainer from './student/container/HomeContainer'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Router>
      <div>
        <ul>
          <li><Link to="/">App</Link></li>
          <li><Link to="/app">HomeContainer</Link></li>
          <li><Link to="/app/profile">ProfileContainer</Link></li>
          <li><Link to="/404">NotFound</Link></li>
        </ul>

        <hr/>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route path="/app" component={HomeContainer}>
            <Route path="/home" component={HomeBody}/>
            <Route path="/profile" component={ProfileBody}/>
          </Route>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>,
    document.getElementById('app')
)

registerServiceWorker()