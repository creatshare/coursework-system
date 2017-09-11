/**
 * Created by hanyile on 2017/8/15.
 */

import React, { Component } from 'react'
import { Container, Table, Header, Form, Select, Segment, Dimmer, Loader } from 'semantic-ui-react'
import request from 'superagent'
import DatePicker from 'react-datepicker'
import ItemModal from './ItemModal'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

class ListWrap extends Component {
  constructor () {
    super()
    this.state = {
      id: sessionStorage.getItem("id"),
      token: sessionStorage.getItem("token"),
      workTypeID: "2",
      dateFrom: "2017-09-01",
      dateTo: "2017-09-11",
      myAllWork: []
    }
  }

  componentDidMount () {
    request.post('http://222.24.63.100:9138/cms/searchmywork')
      .type('form')
      .send({
        id: this.state.id,
        token: this.state.token,
        typeid: this.state.workTypeID,
        datefrom: this.state.dateFrom,
        dateto: this.state.dateTo
      })
      .end((err, data)=> {
        if (data.text === "0") return
        let myAllWork = data.text.split("`")
        myAllWork.pop()
        this.setState({
          myAllWork: myAllWork
        })
      })
  }

  render () {
    return (
        <Container className="ListContainer">
          <Segment className="ListSegment">

            <Dimmer inverted>
              <Loader indeterminate>Loading the data</Loader>
            </Dimmer>

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
                {(() => {
                  let divContainerArr = []
                  this.state.myAllWork.forEach((value, index, array) => {
                    if (index % 6 !== 0) return
                    divContainerArr.push(
                        <Table.Row>
                          <Table.Cell>{array[index + 1]}</Table.Cell>
                          <Table.Cell>{array[index + 2]}</Table.Cell>
                          <Table.Cell>{array[index + 3]}</Table.Cell>
                          <Table.Cell><ItemModal workTypeID={array[index]} /></Table.Cell>
                        </Table.Row>
                    )
                  })
                  return divContainerArr
                })()}
              </Table.Body>
            </Table>
          </Segment>
        </Container>
    )
  }
}

export default ListWrap