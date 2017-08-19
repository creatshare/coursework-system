/**
 * Created by hanyile on 2017/8/19.
 */

import React from 'react'
import { Container, Table, Form, Select, Segment, Input, Button } from 'semantic-ui-react'

const WorkshopBody = () => (
    <div>
      <Container className="WorkshopContainer">
        <Segment className="WorkshopSegment">
          <Form>
            <Form.Group widths='equal'>
              <Form.Field control={Select} label='Class' options={[
                {key: 'rj1501', text: '软件1501', value: 'rj1501'},
                {key: 'rj1502', text: '软件1502', value: 'rj1502'},
                {key: 'rj1503', text: '软件1503', value: 'rj1503'},
                {key: 'rj1504', text: '软件1504', value: 'rj1504'},
                {key: 'rj1505', text: '软件1505', value: 'rj1505'},
              ]} placeholder='Select the class' />
              <Form.Field control={Input} label='学号' placeholder='Input one student`s id card'/>
              <Form.Field control={Input} label='姓名' placeholder='Input one student`s name'/>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field control={Select} label='Type' options={[
                {key: 'al', text: 'All Type', value: 'al'},
                {key: 'ho', text: 'Home Work', value: 'ho'},
                {key: 'co', text: 'Couse Work', value: 'co'},
                {key: 'cl', text: 'Class Work', value: 'cl'},
                {key: 'ot', text: 'Other', value: 'ot'},
              ]} placeholder='Select Your Work Type' />
              <Form.Field control={Select} label='From Date' options={[
                {key: 'fd', text: '2017-08-01', value: 'fd'}
              ]} placeholder='Select Date' className="WorkshopDateField"/>
              <Form.Field control={Select} label='To' options={[
                {key: 'td', text: '2017-08-01', value: 'td'}
              ]} placeholder='Select Date' className="WorkshopDateField"/>
            </Form.Group>
          </Form>

          <Table celled className="WorkshopTable">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Class ID</Table.HeaderCell>
                <Table.HeaderCell>Student ID</Table.HeaderCell>
                <Table.HeaderCell>Student Name</Table.HeaderCell>
                <Table.HeaderCell>Submit Time</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>File Size</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>2017-08-01</Table.Cell>
                <Table.Cell>Home Work</Table.Cell>
                <Table.Cell>C Language System</Table.Cell>
                <Table.Cell>1024b</Table.Cell>
                <Table.Cell><Button>Evaluate</Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>2017-08-01</Table.Cell>
                <Table.Cell>Home Work</Table.Cell>
                <Table.Cell>C Language System</Table.Cell>
                <Table.Cell>1024b</Table.Cell>
                <Table.Cell><Button>Evaluate</Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>2017-08-01</Table.Cell>
                <Table.Cell>Home Work</Table.Cell>
                <Table.Cell>C Language System</Table.Cell>
                <Table.Cell>1024b</Table.Cell>
                <Table.Cell><Button>Evaluate</Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>2017-08-01</Table.Cell>
                <Table.Cell>Home Work</Table.Cell>
                <Table.Cell>C Language System</Table.Cell>
                <Table.Cell>1024b</Table.Cell>
                <Table.Cell><Button>Evaluate</Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>2017-08-01</Table.Cell>
                <Table.Cell>Home Work</Table.Cell>
                <Table.Cell>C Language System</Table.Cell>
                <Table.Cell>1024b</Table.Cell>
                <Table.Cell><Button>Evaluate</Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>6</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>2017-08-01</Table.Cell>
                <Table.Cell>Home Work</Table.Cell>
                <Table.Cell>C Language System</Table.Cell>
                <Table.Cell>1024b</Table.Cell>
                <Table.Cell><Button>Evaluate</Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>7</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>2017-08-01</Table.Cell>
                <Table.Cell>Home Work</Table.Cell>
                <Table.Cell>C Language System</Table.Cell>
                <Table.Cell>1024b</Table.Cell>
                <Table.Cell><Button>Evaluate</Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>8</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>2017-08-01</Table.Cell>
                <Table.Cell>Home Work</Table.Cell>
                <Table.Cell>C Language System</Table.Cell>
                <Table.Cell>1024b</Table.Cell>
                <Table.Cell><Button>Evaluate</Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>9</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>2017-08-01</Table.Cell>
                <Table.Cell>Home Work</Table.Cell>
                <Table.Cell>C Language System</Table.Cell>
                <Table.Cell>1024b</Table.Cell>
                <Table.Cell><Button>Evaluate</Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>2017-08-01</Table.Cell>
                <Table.Cell>Home Work</Table.Cell>
                <Table.Cell>C Language System</Table.Cell>
                <Table.Cell>1024b</Table.Cell>
                <Table.Cell><Button>Evaluate</Button></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </Container>
    </div>
)

export default WorkshopBody