/**
 * Created by hanyile on 2017/8/7.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NotFound from './components/public/NotFound'
import LoginContainer from './container/LoginContainer'
import StudentContainer from './container/StudentContainer'
import TeacherContainer from './container/TeacherContainer'

import './style/index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Router>
        <Switch>
          <Route exact path="/" component={LoginContainer}/>
          <Route path="/s" component={StudentContainer}/>
          <Route path="/t" component={TeacherContainer}/>
          <Route path="/404" component={NotFound}/>
        </Switch>
    </Router>,
    document.getElementById('app')
)

registerServiceWorker()