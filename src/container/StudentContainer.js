/**
 * Created by hanyile on 2017/8/10.
 */

import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'

import IndexHeader from '../components/IndexHeader'
import StudentBody from '../components/StudentBody'
import ProfileBody from '../components/ProfileBody'
import IndexFooter from '../components/IndexFooter'
import NotFound from '../components/NotFound'

class StudentContainer extends Component {
  render () {
    return (
        <div>
          <IndexHeader />
          <Switch>
            <Route exact path="/app/home" component={StudentBody}/>
            <Route path="/app/profile" component={ProfileBody}/>
            <Route component={NotFound}/>
          </Switch>
          <IndexFooter />
        </div>
    )
  }
}

export default StudentContainer