/**
 * Created by hanyile on 2017/8/15.
 */

import React, { Component } from 'react'
import { Container, Message, Image, Menu } from 'semantic-ui-react'
import createHistory from 'history/createBrowserHistory'

import Logo from '../../images/logo.png'

const history = createHistory()

class StudentHeader extends Component {
  constructor (props) {
    super(props)
    this.logOut = this.logOut.bind(this);
  }

  logOut () {
    localStorage.removeItem("id")
    localStorage.removeItem("token")
    history.push('/', {})
    window.location.reload()
  }

  render () {
    let pathname = window.location.pathname
    let cursor = pathname.split("/")[2]

    return (
        <div>
          <Menu inverted pointing stackable>
            <Container className="HeaderContainer">
              <Menu.Item as='span' header>
                <Image
                    size='mini'
                    src={Logo}
                    className="HeaderImage"
                />
                Coursework Management System
              </Menu.Item>

              <Menu.Item as='a'
                         href='/s/home'
                         target='_self'
                         active={cursor==='home'}>
                Home
              </Menu.Item>
              <Menu.Item as='a'
                         href='/s/profile'
                         target='_self'
                         active={cursor==='profile'}>
                Profile
              </Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item as='a' onClick={this.logOut} active={false}>Log-out</Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>

          <Container className="HeaderMessageContainer">
            <Message info>
              <b>Welcome back!</b> Please checkout your browser to make sure that the system can run successfully.
            </Message>
          </Container>
        </div>
    )
  }
}

export default StudentHeader


