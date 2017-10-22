/**
 * Created by hanyile on 2017/8/10.
 */

import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// 学生页面, 头部导航条
import StudentHeader from '../components/student/StudentHeader'
// 学生页面, Home 菜单主体, 有"提交作业"和"查询作业"功能
import StudentBody from '../components/student/StudentBody'
// 学生页面, Profile 菜单主体, 有"修改信息"和"Q&A"功能
import ProfileBody from '../components/public/ProfileBody'
// 学生页面, 底部版权栏
import IndexFooter from '../components/public/IndexFooter'

class StudentContainer extends Component {
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