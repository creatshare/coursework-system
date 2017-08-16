/**
 * Created by hanyile on 2017/8/10.
 */

import React, {Component} from 'react'
import { Route } from 'react-router-dom'

import IndexHeader from '../components/IndexHeader'
import HomeBody from '../components/HomeBody'
import ProfileBody from '../components/ProfileBody'
import IndexFooter from '../components/IndexFooter'

class HomeContainer extends Component {
  render () {
    return (
        <div>
          <IndexHeader />
          <Route path="/app/home" component={HomeBody}/>
          <Route path="/app/profile" component={ProfileBody}/>
          <IndexFooter />
        </div>
    )
  }
}

export default HomeContainer