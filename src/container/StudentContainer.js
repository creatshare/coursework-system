/**
 * Created by hanyile on 2017/8/10.
 */

import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import StudentHeader from '../components/StudentHeader'
import StudentBody from '../components/StudentBody'
import ProfileBody from '../components/ProfileBody'
import IndexFooter from '../components/IndexFooter'

class StudentContainer extends Component {
  render () {
    return (
        <div>
          <StudentHeader />
          <Switch>
            <Route path="/s/home" component={StudentBody}/>
            <Route path="/s/profile" component={ProfileBody}/>
            <Redirect to="/404"/>
          </Switch>
          <IndexFooter />
        </div>
    )
  }
}

export default StudentContainer