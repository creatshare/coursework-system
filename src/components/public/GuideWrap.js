/**
 * Created by hanyile on 2017/8/15.
 */

import React from 'react'
import { Container, Message, Header, Segment } from 'semantic-ui-react'

const GuideWrap = () => (
    <Container className="GuideContainer">
      <Segment className="GuideSegment">
        <Header as='h1' className="GuideHeader">
          Q & A
        </Header>
        <Message
            icon='comments outline'
            header='What`s my account`s initial password?'
            content='That`s "123456". Please modify your password at the first time'
        />
        <Message
            icon='comments outline'
            header='What can I do when I forget my password?'
            content='Contact your teacher, and he/she will tell you what to do.'
        />
        <Message
            icon='comments outline'
            header='How to learn the C language?'
            content='Open it frequently: http://222.24.63.100:9138'
        />
        <Message
            icon='comments outline'
            header='How important is this system?'
            content='It can decide your usual grades.'
        />
        <Message
            icon='comments outline'
            header='Will there be any exciting new feature?'
            content='We are working on it and we will tell you in time.'
        />
        <Message
            icon='comments outline'
            header='What technology built this program?'
            content='Not only Java, Node.js, Semantic-UI and React.js.'
        />
      </Segment>
    </Container>
)

export default GuideWrap