/**
 * Created by hanyile on 2017/9/5.
 */

import React from 'react'
import { Header, Modal, Button, Icon } from 'semantic-ui-react'
import AceEditor from 'react-ace'
import 'brace/mode/c_cpp'
import 'brace/theme/github'

const ItemModal = () => (
    <Modal trigger={<a href="javascript: void(0)">A (Read more)</a>}>
      <Modal.Header>C Language System - A</Modal.Header>
      <Modal.Content image scrolling>
        <Modal.Description>
          <Header>Type</Header>
          <p>Home Work</p>
          <Header>Submit Time</Header>
          <p>2017-08-01</p>
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
            value={"#include \<stido.h\>\n\nint main (void) \{\n    printf(\"Hello World!\");\n    return 0;\n\}"}
          />
          <Header>Comment</Header>
          <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
          <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
          <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary>
          Proceed <Icon name='right chevron' />
        </Button>
      </Modal.Actions>
    </Modal>
)

export default ItemModal