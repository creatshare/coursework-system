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

const HomeFooter = () => (
    <Segment
        inverted
        vertical
        className="FooterSegment"
    >
      <Container textAlign='center'>
        <Image
            centered
            size='mini'
            src={Logo}
        />
        <List horizontal inverted divided link>
          <List.Item as='p'>Copyright © 2017</List.Item>
        </List>
      </Container>
    </Segment>
)

export default HomeFooter