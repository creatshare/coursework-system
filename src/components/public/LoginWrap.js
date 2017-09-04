/**
 * Created by hanyile on 2017/8/10.
 */

import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import Logo from '../../images/logo.png'

class LoginWrap extends Component {
  doAction () {
    console.log(1)
  }

  render () {
    return (
        <div className='loginContainer'>
          {/*
           Heads up! The styles below are necessary for the correct render of this example.
           You can do same with CSS, the main idea is that all the elements up to the `Grid`
           below must have a height of 100%.
           */}
          <Grid
              textAlign='center'
              style={{ height: '100%' }}
              verticalAlign='middle'
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h5' color='teal' textAlign='center'>
                <Image src={Logo} />
                {' '}Cousework Management System
              </Header>
              {/*<Form size='large' loading>*/}
              <Form size='large' action="/s/home">
                <Segment stacked>
                  <Form.Input
                      fluid
                      icon='user'
                      iconPosition='left'
                      placeholder='ID'
                  />
                  <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                  />
                  <Button
                      fluid
                      color='teal'
                      size='large'
                  >Login</Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

export default LoginWrap