/**
 * Created by hanyile on 2017/8/15.
 */

import React, {Component} from 'react'
import {
    Container, Message, Table,
    Icon, Dimmer, Loader,
    Input, Form, Select,
    Checkbox, Radio, TextArea,
    Label, Divider, Button,
    Dropdown, Grid, Header,
    Image, List, Menu,
    Segment
} from 'semantic-ui-react'

import Logo from '../images/logo.png'

const HomeHeader = () => (
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
          <Menu.Item as='a' href='#' target='_self' active={false}>Home</Menu.Item>
          <Menu.Item as='a' href='#' target='_self' active={true}>Profile</Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item as='a' href='#' target='_self' active={false}>Log-out</Menu.Item>
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

export default HomeHeader;


