/**
 * Created by hanyile on 2017/8/10.
 */

import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import StudentHeader from '../components/student/StudentHeader'
import StudentBody from '../components/student/StudentBody'
import ProfileBody from '../components/public/ProfileBody'
import IndexFooter from '../components/public/IndexFooter'

class StudentContainer extends Component {
  isLoggedIn () {
    return true
  }

  render () {
    return (
        <div>
          <StudentHeader />
          <Switch>
            <Route exact path="/s/home" render={() => (
                this.isLoggedIn() ? ( <StudentBody /> ) : ( <Redirect to="/"/> )
            )}/>
            <Route exact path="/s/profile" render={() => (
                this.isLoggedIn() ? ( <ProfileBody /> ) : ( <Redirect to="/"/> )
            )}/>
            <Redirect to="/404"/>
          </Switch>
          <IndexFooter />
        </div>
    )
  }
}

export default StudentContainer