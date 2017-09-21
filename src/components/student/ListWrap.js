/**
 * Created by hanyile on 2017/8/15.
 */

import React, { Component } from 'react'
import { Container, Table, Header, Form, Select, Segment, Dimmer, Loader, Input } from 'semantic-ui-react'
import request from 'superagent'
import ItemModal from './ItemModal'
import moment from 'moment'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

class ListWrap extends Component {
  constructor () {
    super()
    this.state = {
      id: sessionStorage.getItem("id"),
      token: sessionStorage.getItem("token"),
      allWorkType: [],
      workTypeID: "",
      dateFrom: "2017-09-01",
      dateTo: moment(),
      myAllWork: []
    }
  }

  getWorkType () {
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

  clearMyWork () {
    this.setState({
      myAllWork: []
    })
  }

  searchMyWork () {
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

  componentDidMount () {
    console.log(this.state.dateTo)
    this.searchMyWork()
    this.getWorkType()
  }

  handleTypeChange (e, data) {
    let { value } = data
    let allWorkType = this.state.allWorkType
    let workTypeID = (value === "allTypes") ? "" : allWorkType[allWorkType.indexOf(value) - 1]
    this.setState({
      workTypeID: workTypeID
    }, function () {
      this.clearMyWork()
      this.searchMyWork()
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
                {key: "allTypes", text: "all types", value: "allTypes"},
                {key: this.state.allWorkType[0], text: this.state.allWorkType[1], value: this.state.allWorkType[1]},
                {key: this.state.allWorkType[2], text: this.state.allWorkType[3], value: this.state.allWorkType[3]},
                {key: this.state.allWorkType[4], text: this.state.allWorkType[5], value: this.state.allWorkType[5]},
                {key: this.state.allWorkType[6], text: this.state.allWorkType[7], value: this.state.allWorkType[7]},
              ]} select={this.state.allWorkType[1]} onChange={this.handleTypeChange.bind(this)} placeholder='Select Your Work Type' />
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
                          <Table.Cell><ItemModal workID={array[index]} /></Table.Cell>
                          <Table.Cell>{array[index + 5]}</Table.Cell>
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