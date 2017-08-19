/**
 * Created by hanyile on 2017/8/15.
 */

import React from 'react'
import { Container, Message, Image, Menu } from 'semantic-ui-react'

import Logo from '../../images/logo.png'

const TeacherHeader = () => (
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
          <Menu.Item as='a' href='/t/workshop' target='_self' active={true}>Workshop</Menu.Item>
          <Menu.Item as='a' href='/t/statistics' target='_self' active={true}>Statistics</Menu.Item>
          <Menu.Item as='a' href='/t/management' target='_self' active={true}>Management</Menu.Item>
          <Menu.Item as='a' href='/t/history' target='_self' active={true}>History</Menu.Item>
          <Menu.Item as='a' href='/t/profile' target='_self' active={true}>Profile</Menu.Item>
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

export default TeacherHeader;


