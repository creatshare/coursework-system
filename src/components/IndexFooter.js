/**
 * Created by hanyile on 2017/8/15.
 */

import React from 'react'
import { Container, Image, List, Segment} from 'semantic-ui-react'

import Logo from '../images/logo.png'

const IndexFooter = () => (
    <Segment
        inverted
        vertical
        className="FooterSegment"
    >
      <Container textAlign='center'>
        <Image
            centered
            size='mini'
            src={Logo}
        />
        <List horizontal inverted divided link>
          <List.Item as='p'>Copyright © 2017</List.Item>
        </List>
      </Container>
    </Segment>
)

export default IndexFooter