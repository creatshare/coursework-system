/**
 * Created by hanyile on 2017/8/15.
 */

import React from 'react'
import { Container, Input, Form, Select, Checkbox, Button, Header, Segment } from 'semantic-ui-react'
import AceEditor from 'react-ace';
import 'brace/mode/c_cpp';
import 'brace/theme/github'

const TaskWrap = () => (
    <Container className="TaskContainer">
      <Segment className="TaskSegment">

        <Header as='h1'>Submit Your Homework</Header>
        <Form>
          <Form.Field control={Input} label='Title' placeholder='Work Title' />
          <Form.Field control={Select} label='Type (Be carefully to pick)' options={[
            {key: 'ho', text: 'Home Work', value: 'ho'},
            {key: 'co', text: 'Couse Work', value: 'co'},
            {key: 'cl', text: 'Class Work', value: 'cl'},
            {key: 'ot', text: 'Other', value: 'ot'},
          ]} placeholder='Select Your Work Type' />

          <Form.Field className="TaskField">
            <label>Your code</label>
            <AceEditor
              style={{
                height: '32vh',
                width: '100%',
              }}
              mode="c_cpp"
              theme="github"
              editorProps={{$blockScrolling: true}}
              value={"#include \<stido.h\>\n\nint main (void) \{\n    printf(\"Hello World!\");\n    return 0;\n\}"}/>
          </Form.Field>
          <Form.Field control={Checkbox} label="I'm sure I wrote these code by my own" />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </Segment>
    </Container>
)

export default TaskWrap