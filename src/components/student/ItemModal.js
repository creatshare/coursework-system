/**
 * Created by hanyile on 2017/9/5.
 */

import React, { Component} from 'react'
import { Header, Modal, Button, Icon } from 'semantic-ui-react'
import request from 'superagent'
import AceEditor from 'react-ace'
import 'brace/mode/c_cpp'
import 'brace/theme/github'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

class ItemModal extends Component {
  constructor (props) {
    super(props)
    let { workID } = props
    this.state = {
      id: sessionStorage.getItem("id"),
      token: sessionStorage.getItem("token"),
      workID: workID,
      submitTime: "",
      workTitle: "",
      workContent: "",
      workRating: "",
      workComment: "",
      workDeleteStatus: false,
    }
  }

  componentDidMount () {
    request.post('http://222.24.63.100:9138/cms/getworkdetail')
      .type('form')
      .send({
        id: this.state.id,
        token: this.state.token,
        workid: this.state.workID
      })
      .end((err, data)=> {
        if (data.text === "0") {
          console.log("get work detail filed.")
          return
        }
        let res = data.text.split("`")
        let workRating = (res[4] !== " " ? res[4] : "-")
        this.setState({
          submitTime: res[0],
          workTypeID: res[1],
          workTitle: res[2],
          workContent: res[3],
          workRating: workRating,
          workComment: res[5],
          workDeleteStatus: workRating === "-"
        })
      })
  }

  deleteWork () {
    request.post('http://222.24.63.100:9138/cms/delwork')
      .type('form')
      .send({
        id: sessionStorage.getItem("id"),
        token: sessionStorage.getItem("token"),
        workid: this.state.workID
      })
      .end((err, data)=> {
        console.log(data)
        console.log(typeof data)
        alert("Delete Succeed!")
        history.push('/s/home', {})
        window.location.reload()
      })
  }

  render () {
    return (
        <Modal trigger={<a href="javascript: void(0)">{this.state.workTitle}</a>}>
          <Modal.Header>C Language System - {this.state.workRating !== "-" ? this.state.workRating : "No rating from teachers yet"}</Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>
              <Header>Type</Header>
              <p>{this.state.workTypeID}</p>
              <Header>Submit Time</Header>
              <p>{this.state.submitTime}</p>
              <Header>Your Code</Header>
              <AceEditor
                  style={{
                    height: '22vh',
                    width: '100%'
                  }}
                  mode="c_cpp"
                  theme="github"
                  editorProps={{$blockScrolling: true}}
                  readOnly="true"
                  value={this.state.workContent}
              />
              <Header>Comment</Header>
              <p>{this.state.workComment !== " " ? this.state.workComment : "No comment from teachers yet."}</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            {(() => {
              if (this.state.workDeleteStatus)
                  return <Button color='red' onClick={this.deleteWork.bind(this)}>Delete</Button>
            })()}
          </Modal.Actions>
        </Modal>
    )
  }
}


export default ItemModal