/**
 * Created by hanyile on 2017/8/15.
 */

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

const ProfileWrap = () => (
    <Container className="ProfileContainer">
      <Segment className="ProfileSegment">

        {/*<Dimmer active inverted>*/}
        {/*<Loader indeterminate>Submitting...</Loader>*/}
        {/*</Dimmer>*/}

        <Header as='h3' icon textAlign='center'>
          <Icon name='user' circular />
          <Header.Content>
            Your Profile
          </Header.Content>
        </Header>

        <Form className="ProfileForm">
          <Form.Group widths='equal'>
            <Form.Input label='ID card' placeholder='04153088' disabled/>
            <Form.Input label='Change Your Name' placeholder='韩亦乐' />
          </Form.Group>
          <Form.Input label='Old password' placeholder='Please input...' error />
          <Form.Group widths='equal'>
            <Form.Input label='New Password' placeholder='Please input...' />
            <Form.Input label='Repeat New Password' placeholder='Please input...' error/>
          </Form.Group>
        </Form>

        <Button primary fluid>Modify</Button>
        {/*<Message*/}
            {/*success*/}
            {/*header='Form completed'*/}
            {/*content="You need to use the new password to login at the next time"*/}
        {/*/>*/}
        <Message
            error
            header='Action Error'
            content='Please double-check your form'
        />
      </Segment>
    </Container>
)

export default ProfileWrap