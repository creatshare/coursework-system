/**
 * Created by hanyile on 2017/8/15.
 */

import React, {Component} from 'react'
import { Container, Form, Select, Checkbox, Button, Header, Segment } from 'semantic-ui-react'
import request from 'superagent'
import AceEditor from 'react-ace';
import 'brace/mode/c_cpp';
import 'brace/theme/github'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

class TaskWrap extends Component {
  constructor () {
    super()
    this.state = {
      id: sessionStorage.getItem("id"),
      token: sessionStorage.getItem("token"),
      allWorkType: [],
      workTitle: "",
      workTypeID: "",
      workContent: "#include \<stido.h\>\n\nint main (void) \{\n    printf(\"Hello World!\");\n    return 0;\n\}",
      honestValidation: false,
      msgContent: "",
      workTitleStatus: "",
      workTypeIDStatus: ""
    }
  }

  componentDidMount () {
    request.post('http://222.24.63.100:9138/cms/getworktype')
      .type('form')
      .send({
        id: this.state.id,
        token: this.state.token
      })
      .end((err, data)=> {
        this.setState({
          allWorkType: data.text.split("`")
        })
      })
  }

  handleTitleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleTypeChange (e, data) {
    let { value } = data
    let allWorkType = this.state.allWorkType
    let workTypeID = allWorkType[allWorkType.indexOf(value) - 1]
    this.setState({
      workTypeID: workTypeID
    })
  }

  handleContentChange (workContent) {
    this.setState({
      workContent: workContent
    })
  }

  handleHonestChange (e, data) {
    this.setState({
      honestValidation: data.checked
    })
  }

  handleSubmit () {
    let { id, token, workTitle ,workTypeID, workContent, honestValidation } = this.state
    this.setState({workTitleStatus: "", workTypeIDStatus: ""})
    if (!honestValidation) {
      this.setState({msgContent: "Please make sure that your wrote these by your own."})
      return
    } else if (!workTitle) {
      this.setState({msgContent: "Please input your Title.", workTitleStatus: "error"})
      return
    } else if (!workTypeID) {
      this.setState({msgContent: "Please choose the Type.", workTypeIDStatus: "error"})
      return
    } else if (!workContent) {
      this.setState({msgContent: "Your programming code cannot be null!"})
      return
    }
    request.post('http://222.24.63.100:9138/cms/submitwork')
      .type('form')
      .send({
        id: id,
        token: token,
        typeid: workTypeID,
        title: workTitle,
        work: workContent
      })
      .end((err, data)=> {
        if(parseInt(data.text) === 1) {
          alert("Submit Success!")
          history.push('/s/home', {})
          window.location.reload()
        } else {
          this.setState({msgContent: "Unexpected submit error..."})
        }
      })
  }

  render () {
    return (
        <Container className="TaskContainer">
          <Segment className="TaskSegment">

            <Header as='h1'>Submit Your Homework</Header>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <Form.Field>
                <Form.Input
                    className={this.state.workTitleStatus}
                    type="text"
                    label='Title'
                    name="workTitle"
                    placeholder='Work Title'
                    onChange={this.handleTitleChange.bind(this)}
                />
              </Form.Field>

              <Form.Field>
                <label>Type (Be carefully to pick one)</label>

                <Select className={this.state.workTypeIDStatus} options={[
                  {key: this.state.allWorkType[0], text: this.state.allWorkType[1], value: this.state.allWorkType[1]},
                  {key: this.state.allWorkType[2], text: this.state.allWorkType[3], value: this.state.allWorkType[3]},
                  {key: this.state.allWorkType[4], text: this.state.allWorkType[5], value: this.state.allWorkType[5]},
                  {key: this.state.allWorkType[6], text: this.state.allWorkType[7], value: this.state.allWorkType[7]},
                ]} select={this.state.allWorkType[1]} placeholder='Select Your Work Type' onChange={this.handleTypeChange.bind(this)} />
              </Form.Field>

              <Form.Field className="TaskField">
                <label>Your Answer</label>
                <AceEditor
                    style={{
                      height: '32vh',
                      width: '100%',
                    }}
                    mode="c_cpp"
                    theme="github"
                    editorProps={{$blockScrolling: true}}
                    value={this.state.workContent}
                    onChange={this.handleContentChange.bind(this)}
                />
              </Form.Field>

              <Form.Field control={Checkbox} label="I'm sure I wrote these code by my own" onChange={this.handleHonestChange.bind(this)} />

              <Form.Field>
                <Button>Submit</Button>
                <span style={{
                  fontWight: '2em',
                  marginLeft: '2em',
                  color: '#912d2b'
                }}>{this.state.msgContent}</span>
              </Form.Field>
            </Form>
          </Segment>
        </Container>
    )
  }
}

export default TaskWrap