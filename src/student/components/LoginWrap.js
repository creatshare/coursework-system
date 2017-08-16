/**
 * Created by hanyile on 2017/8/10.
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import Logo from '../images/logo.png'

const LoginWrap = () => (
    <div className='login-form'>
      {/*
       Heads up! The styles below are necessary for the correct render of this example.
       You can do same with CSS, the main idea is that all the elements up to the `Grid`
       below must have a height of 100%.
       */}
      <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%
      }
    `}</style>
      <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src={Logo} />
            {' '}Log-in to your account
          </Header>
          {/*<Form size='large' loading>*/}
          <Form size='large' action="/app/home">
            <Segment stacked>
              <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='ID Card'
              />
              <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
              />
              <Button color='teal' fluid size='large'>Login</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
)

export default LoginWrap