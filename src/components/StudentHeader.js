/**
 * Created by hanyile on 2017/8/15.
 */

import React from 'react'
import { Container, Message, Image, Menu } from 'semantic-ui-react'

import Logo from '../images/logo.png'

const StudentHeader = () => (
    <div>
      <Menu inverted pointing stackable>
        <Container className="HeaderContainer">
          <Menu.Item as='span' header>
            <Image
                size='mini'
                src={Logo}
                className="HeaderImage"
            />
            C Language System
          </Menu.Item>
          <Menu.Item as='a' href='/s/home' target='_self' active={true}>Home</Menu.Item>
          <Menu.Item as='a' href='/s/profile' target='_self' active={true}>Profile</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item as='a' href='/' target='_self' active={false}>Log-out</Menu.Item>
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

export default StudentHeader;


