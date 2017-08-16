/**
 * Created by hanyile on 2017/8/10.
 */

import React, {Component} from 'react'

import IndexHeader from '../components/IndexHeader'
import HomeBody from '../components/HomeBody'
import IndexFooter from '../components/IndexFooter'

class HomeContainer extends Component {
  render() {
    return (
        <div>
          <IndexHeader />
          <HomeBody />
          <IndexFooter />
        </div>
    )
  }
}

export default HomeContainer