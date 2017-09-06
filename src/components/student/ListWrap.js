/**
 * Created by hanyile on 2017/8/15.
 */

import React from 'react'
import { Container, Table, Header, Form, Select, Segment } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import ItemModal from './ItemModal'

import 'react-datepicker/dist/react-datepicker.css'

const ListWrap = () => (
    <Container className="ListContainer">
      <Segment className="ListSegment">

        {/*<Dimmer active inverted>*/}
        {/*<Loader indeterminate>Loading the data</Loader>*/}
        {/*</Dimmer>*/}

        <Header as='h1'>History</Header>

        <Form>
          <Form.Field control={Select} label='Type' options={[
            {key: 'al', text: 'All Type', value: 'al'},
            {key: 'ho', text: 'Home Work', value: 'ho'},
            {key: 'co', text: 'Couse Work', value: 'co'},
            {key: 'cl', text: 'Class Work', value: 'cl'},
            {key: 'ot', text: 'Other', value: 'ot'},
          ]} placeholder='Select Your Work Type' />
          <Form.Group widths='equal'>
            <Form.Field control={DatePicker} label='From Date' options={[
              {key: 'fd', text: '2017-08-01', value: 'fd'}
            ]} placeholder='Select Date' className="ListDateField"/>
            <Form.Field control={DatePicker} label='To' options={[
              {key: 'td', text: '2017-08-01', value: 'td'}
            ]} placeholder='Select Date' className="ListDateField"/>
          </Form.Group>
        </Form>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Submit Time</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Rating</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell><ItemModal/></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell><ItemModal/></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell><ItemModal/></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    </Container>
)

export default ListWrap