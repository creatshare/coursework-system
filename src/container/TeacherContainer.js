/**
 * Created by hanyile on 2017/8/17.
 */

import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import TeacherHeader from '../components/teacher/TeacherHeader'
import WorkshopBody from '../components/teacher/WorkshopBody'
import StatisticsBody from '../components/teacher/StatisticsBody'
import ManagementBody from '../components/teacher/ManagementBody'
import ProfileBody from '../components/public/ProfileBody'
import IndexFooter from '../components/public/IndexFooter'

class TeacherContainer extends Component {
  render () {
    return (
        <div>
          <TeacherHeader />
          <Switch>
            <Route path="/t/workshop" component={WorkshopBody}/>
            <Route path="/t/statistics" component={StatisticsBody}/>
            <Route path="/t/management" component={ManagementBody}/>
            <Route path="/t/profile" component={ProfileBody}/>
            <Redirect to="/404"/>
          </Switch>
          <IndexFooter />
        </div>
    )
  }
}

export default TeacherContainer