/**
 * Created by hanyile on 2017/8/17.
 */

import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// 教师页面, 头部导航条
import TeacherHeader from '../components/teacher/TeacherHeader'
// 教师页面, Workshop 菜单主体, 有"批改作业"功能
import WorkshopBody from '../components/teacher/WorkshopBody'
// 教师页面, Statistics 菜单主体, 有"分析本学年统计数据"、"查看历史学年统计数据"功能
import StatisticsBody from '../components/teacher/StatisticsBody'
// 教师页面, Management 菜单主体, 有"管理学年"、"管理班级"和"新增学生账号"功能
import ManagementBody from '../components/teacher/ManagementBody'
// 教师页面, Profile 菜单主体, 有"修改信息"和"Q&A"功能
import ProfileBody from '../components/public/ProfileBody'
// 教师页面, 底部版权栏
import IndexFooter from '../components/public/IndexFooter'

class TeacherContainer extends Component {
  isLoggedIn () {
    var id = sessionStorage.getItem('id')
    var identity = sessionStorage.getItem('identity')
    var token = sessionStorage.getItem('token')
    if (!id || !identity || !token) {
      alert("Sorry, Please login first!")
      return false
    }
    return true
  }

  render () {
    return (
        <div>
          <TeacherHeader />
          <Switch>
            <Route exact path="/t/workshop" render={() => (
                this.isLoggedIn() ? ( <WorkshopBody /> ) : ( <Redirect to="/"/> )
            )}/>
            <Route exact path="/t/statistics" render={() => (
                this.isLoggedIn() ? ( <StatisticsBody /> ) : ( <Redirect to="/"/> )
            )}/>
            <Route exact path="/t/management" render={() => (
                this.isLoggedIn() ? ( <ManagementBody /> ) : ( <Redirect to="/"/> )
            )}/>
            <Route exact path="/t/profile" render={() => (
                this.isLoggedIn() ? ( <ProfileBody /> ) : ( <Redirect to="/"/> )
            )}/>
            <Redirect to="/404"/>
          </Switch>
          <IndexFooter />
        </div>
    )
  }
}

export default TeacherContainer