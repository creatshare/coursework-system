/**
 * Created by hanyile on 2017/8/10.
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