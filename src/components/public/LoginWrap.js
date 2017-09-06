/**
 * Created by hanyile on 2017/8/10.
 */

import React, {Component}  from 'react'
import { Button, Form, Grid, Header, Image, Segment, Message } from 'semantic-ui-react'
import createHistory from 'history/createBrowserHistory'
import Logo from '../../images/logo.png'

import request from 'superagent';

const history = createHistory()

class LoginWrap extends Component {
  constructor (props) {
    super(props)
    this.state = { id: '', password: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit () {
    const { id, password } = this.state
    let loginInfo = {
      id: id,
      password: password
    }
    request.post('http://222.24.63.100:9138/cms/login')
      .type('form')
      .send({
        id: loginInfo.id,
        pass: loginInfo.password
      })
      .end((err, data)=> {
        if (data.text === "0") {
          alert("error input")
        } else {
          let identity = parseInt(data.text.charAt(0))
          let token = parseInt(data.text)
          localStorage.setItem("id", identity)
          localStorage.setItem("token", token)
          if (identity === 1) {
            history.push('/s/home', {})
            window.location.reload()
          } else {
            alert("Oops...\rWe are working on building the teacher`s system. \rPlease come again in a few weeks!")
          }
        }
      });
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
                {' '}Coursework Management System
              </Header>
              {/*<Form size='large' loading>*/}
              <Form size='large' onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input
                      required
                      name="id"
                      fluid
                      icon='user'
                      iconPosition='left'
                      placeholder='ID'
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      required
                      name="password"
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                      onChange={this.handleChange}
                  />
                  <Button
                      fluid
                      color='teal'
                      size='large'
                  >Login</Button>
                </Segment>
              </Form>
              <Message
                  error
                  header='Action Error'
                  content='Please double-check your form'
              />
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

export default LoginWrap