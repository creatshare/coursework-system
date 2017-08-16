/**
 * Created by hanyile on 2017/8/15.
 */

import React, {Component} from 'react'
import {
    Container, Message, Table,
    Icon, Dimmer, Loader,
    Input, Form, Select,
    Checkbox, Radio, TextArea,
    Label, Divider, Button,
    Dropdown, Grid, Header,
    Image, List, Menu,
    Segment
} from 'semantic-ui-react'

const ListWrap = () => (
    <Container className="ListContainer">
      <Segment className="ListSegment">

        {/*<Dimmer active inverted>*/}
        {/*<Loader indeterminate>Loading the data</Loader>*/}
        {/*</Dimmer>*/}

        <Form>
          <Form.Field control={Select} label='Type' options={[
            {key: 'al', text: 'All Type', value: 'al'},
            {key: 'ho', text: 'Home Work', value: 'ho'},
            {key: 'co', text: 'Couse Work', value: 'co'},
            {key: 'cl', text: 'Class Work', value: 'cl'},
            {key: 'ot', text: 'Other', value: 'ot'},
          ]} placeholder='Select Your Work Type' />
          <Form.Group widths='equal'>
            <Form.Field control={Select} label='From Date' options={[
              {key: 'fd', text: '2017-08-01', value: 'fd'}
            ]} placeholder='Select Date' className="ListDateField"/>
            <Form.Field control={Select} label='To' options={[
              {key: 'td', text: '2017-08-01', value: 'td'}
            ]} placeholder='Select Date' className="ListDateField"/>
          </Form.Group>
        </Form>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Work ID</Table.HeaderCell>
              <Table.HeaderCell>Submit Time</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Rating</Table.HeaderCell>
              <Table.HeaderCell>Comment</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>A</Table.Cell>
              <Table.Cell>[Read more]</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>A</Table.Cell>
              <Table.Cell>[Read more]</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>3</Table.Cell>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>A</Table.Cell>
              <Table.Cell>[Read more]</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>4</Table.Cell>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>A</Table.Cell>
              <Table.Cell>[Read more]</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>5</Table.Cell>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>A</Table.Cell>
              <Table.Cell>[Read more]</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='6'>
                <Menu pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='left chevron'/>
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>...</Menu.Item>
                  <Menu.Item as='a'>12</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='right chevron' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>
    </Container>
)

export default ListWrap