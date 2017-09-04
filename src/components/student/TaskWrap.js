/**
 * Created by hanyile on 2017/8/15.
 */

import React from 'react'
import { Container, Input, Form, Select, Checkbox, TextArea, Button, Header, Segment } from 'semantic-ui-react'

const TaskWrap = () => (
    <Container className="TaskContainer">
      <Segment className="TaskSegment">

        <Header as='h1' style={{textAlign: 'center'}}>Submit Your Homework</Header>
        <Form>
          <Form.Field control={Input} label='Title' placeholder='Work Title' />
          <Form.Field control={Select} label='Type (Please review carefully)' options={[
            {key: 'ho', text: 'Home Work', value: 'ho'},
            {key: 'co', text: 'Couse Work', value: 'co'},
            {key: 'cl', text: 'Class Work', value: 'cl'},
            {key: 'ot', text: 'Other', value: 'ot'},
          ]} placeholder='Select Your Work Type' />
          <Form.Field
              control={TextArea}
              label='Your Code'
              placeholder='Write or Paste your C program code here'
              className="TaskField"
          />
          <Form.Field control={Checkbox} label="I'm sure I wrote these code by my own" />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </Segment>
    </Container>
)

export default TaskWrap