/**
 * Created by hanyile on 2017/8/17.
 */

import React, {Component} from 'react'
import TeacherHeader from '../components/TeacherHeader'
import IndexFooter from '../components/IndexFooter'

class TeacherContainer extends Component {
  render () {
    return (
        <div>
          <TeacherHeader />
          <IndexFooter />
        </div>
    )
  }
}

export default TeacherContainer