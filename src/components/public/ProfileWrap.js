/**
 * Created by hanyile on 2017/8/15.
 */

/**
 * Created by hanyile on 2017/8/15.
 */

import React, {Component} from 'react'
import { Container, Message, Form, Button, Header, Segment, Icon } from 'semantic-ui-react'
import request from 'superagent'

class ProfileWrap extends Component {
  constructor () {
    super()
    this.state = {
      id: sessionStorage.getItem("id"),
      token: sessionStorage.getItem("token"),
      clazzName: "",
      userName: "",
      oldPass: "",
      newPass: "",
      repeatPass: "",
      userNameTemp: "",

      msgShow: "false",
      msgStatus: "",
      msgHeader: 'Action Error',
      msgContent: 'Please double-check your form',

      inputOldPassStatus: "",
      inputNewPassStatus: "",
      inputRepeatPassStatus: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showInputStatus (v1, v2, v3) {
    this.setState({
      inputOldPassStatus: v1,
      inputNewPassStatus: v2,
      inputRepeatPassStatus: v3,
    })
  }

  showMsg (msgShow, msgStatus, msgHeader, msgContent) {
    this.setState({
      msgShow: msgShow,
      msgStatus: msgStatus,
      msgHeader: msgHeader,
      msgContent: msgContent
    })
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit () {
    let { id, token, userName, oldPass, newPass, repeatPass, userNameTemp } = this.state
    this.showInputStatus("", "", "")
    if (!userName) userName = userNameTemp
    if (!oldPass) {
      this.showInputStatus("error", "", "")
      this.showMsg("true", "error", "Action Error", "Old Password Cannot be empty.")
      return
    } else if (!newPass) {
      this.showInputStatus("", "error", "")
      this.showMsg("true", "error", "Action Error", "New Password Cannot be empty.")
      return
    } else if (!repeatPass) {
      this.showInputStatus("", "", "error")
      this.showMsg("true", "error", "Action Error", "Repeat Password Cannot be empty.")
      return
    } else if (newPass !== repeatPass) {
      this.showInputStatus("", "error", "error")
      this.showMsg("true", "error", "Action Error", "Please make sure New Password equal to Old Password.")
      return
    }
    request.post('http://222.24.63.100:9138/cms/setprofile')
        .type('form')
        .send({
          id: id,
          token: token,
          oldpass: oldPass,
          newpass: newPass,
          name: userName
        })
        .end((err, data)=> {
          var res = parseInt(data.text)
          if (!res) {
            this.showInputStatus("error", "", "")
            this.showMsg("true", "error", "Action Error", "Old Password is Wrong!")
          } else if (res === 1) {
            this.showInputStatus("", "", "")
            this.showMsg("true", "success", "Success", "Well Done!")
          }
        })
  }

  componentDidMount() {
    request.post('http://222.24.63.100:9138/cms/getprofile')
        .type('form')
        .send({
          id: this.state.id,
          token: this.state.token
        })
        .end((err, data)=> {
          var res = data.text.split("`")
          this.setState({
            id: this.state.id,
            clazzName: res[0],
            userName: res[1],
            userNameTemp: res[1]
          })
        })
  }

  render () {
    return (
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

            <Form className="ProfileForm" onSubmit={this.handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Input className='profileMinWidthInput' label='Class Name' placeholder={this.state.clazzName} disabled/>
                <Form.Input className='profileMinWidthInput' label='ID card' placeholder={this.state.id} disabled/>
                <Form.Input
                    className={"profileMinWidthInput " + this.state.inputUserNameStatus}
                    label='Change Your Name'
                    name="userName"
                    placeholder={this.state.userName}
                    onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Input
                  type="password"
                  label='Old password'
                  name="oldPass"
                  placeholder='Please input...'
                  className={this.state.inputOldPassStatus}
                  onChange={this.handleChange}
              />
              <Form.Group widths='equal'>
                <Form.Input
                    type="password"
                    label='New Password'
                    name="newPass"
                    placeholder='Please input...'
                    className={this.state.inputNewPassStatus}
                    onChange={this.handleChange}
                />
                <Form.Input
                    type="password"
                    label='Repeat New Password'
                    name="repeatPass"
                    placeholder='Please input...'
                    className={this.state.inputRepeatPassStatus}
                    onChange={this.handleChange}
                />
              </Form.Group>

              <Button primary fluid type="submit">Modify</Button>
            </Form>

            {/*<Message*/}
            {/*success*/}
            {/*header='Form completed'*/}
            {/*content="You need to use the new password to login at the next time"*/}
            {/*/>*/}
            {(() => {
              switch (this.state.msgShow) {
                case "true": return (<Message
                    className={this.state.msgStatus}
                    header={this.state.msgHeader}
                    content={this.state.msgContent}
                />)
                case "false": return
              }
            })()}
          </Segment>
        </Container>
    )
  }
}


export default ProfileWrap