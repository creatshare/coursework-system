/**
 * Created by hanyile on 2017/8/7.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import './student/style/index.css'

import NotFound from './student/components/NotFound'
import LoginContainer from './student/container/LoginContainer'
import HomeContainer from './student/container/HomeContainer'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Router>
        <Switch>
          <Route exact path="/" component={LoginContainer}/>
          <Route path="/app" component={HomeContainer}/>
          <Route component={NotFound}/>
        </Switch>
    </Router>,
    document.getElementById('app')
)

registerServiceWorker()