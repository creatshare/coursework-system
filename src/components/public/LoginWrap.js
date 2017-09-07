/**
 * Created by hanyile on 2017/8/10.
 */

import React, {Component}  from 'react'
import { Button, Form, Grid, Header, Image, Segment, Message } from 'semantic-ui-react'
import createHistory from 'history/createBrowserHistory'
import request from 'superagent'

import Logo from '../../images/logo.png'

const history = createHistory()

class LoginWrap extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      password: '',
      msgShow: "false",
      msgHeader: '',
      msgContent: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showMsg (msgShow, msgHeader, msgContent) {
    this.setState({
      msgShow: msgShow,
      msgHeader: msgHeader,
      msgContent: msgContent
    })
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
        if (!data) {
          this.showMsg("true", 'Web Server Error.', 'The Web Server is offline.')
        } else if (data.text === "0") {
          this.showMsg("true", 'Account / Password Error.', 'Please double check your form.')
        } else if (data.text.charAt(0) === "1") {
          let identity = parseInt(data.text).charAt(0)
          let token = parseInt(data.text)
          localStorage.setItem("id", identity)
          localStorage.setItem("token", token)
          history.push('/s/home', {})
          window.location.reload()
        } else if (data.text.charAt(0) === "2") {
          this.showMsg("true", 'Login Error', 'The teacher`s system is under construction.')
        } else {
          this.showMsg("true", 'Amazing Error', 'Something cannot be happened but happened...')
        }
      })
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
              {(() => {
                switch (this.state.msgShow) {
                  case "true": return (<Message
                      error
                      header={this.state.msgHeader}
                      content={this.state.msgContent}
                  />)
                  case "false": return
                }
              })()}
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

export default LoginWrap