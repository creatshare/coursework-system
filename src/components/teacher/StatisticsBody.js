/**
 * Created by hanyile on 2017/8/19.
 */

import React from 'react'
import { Container, Table, Form, Select, Segment, Input, Button } from 'semantic-ui-react'

const StatisticsBody = () => (
    <div>
      <Container className="StatisticsContainer">
        <Segment className="StatisticsSegment">
          <Form>
            <Form.Group widths='equal'>
              <Form.Field control={Select} label='Year' options={[
                {key: '1516', text: '2015-2016', value: '1516'},
                {key: '1617', text: '2016-2017', value: '1617'},
                {key: '1718', text: '2017-2018', value: '1718'}
              ]} placeholder='Select the class' />
              <Form.Field control={Select} label='Class' options={[
                {key: 'rj1501', text: '软件1501', value: 'rj1501'},
                {key: 'rj1502', text: '软件1502', value: 'rj1502'},
                {key: 'rj1503', text: '软件1503', value: 'rj1503'},
                {key: 'rj1504', text: '软件1504', value: 'rj1504'},
                {key: 'rj1505', text: '软件1505', value: 'rj1505'},
              ]} placeholder='Select the class' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='学号' placeholder='Input one student`s id card'/>
              <Form.Field control={Input} label='姓名' placeholder='Input one student`s name'/>
            </Form.Group>
          </Form>

          <Table celled className="StatisticsTable">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Class ID</Table.HeaderCell>
                <Table.HeaderCell>Student ID</Table.HeaderCell>
                <Table.HeaderCell>Student Name</Table.HeaderCell>
                <Table.HeaderCell>Total Times</Table.HeaderCell>
                <Table.HeaderCell>A</Table.HeaderCell>
                <Table.HeaderCell>B</Table.HeaderCell>
                <Table.HeaderCell>C</Table.HeaderCell>
                <Table.HeaderCell>D</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>4</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>4</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>4</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>4</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>4</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>6</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>4</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>7</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>4</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>8</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>4</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>9</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>4</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>04153088</Table.Cell>
                <Table.Cell>韩亦乐</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>4</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </Container>
    </div>
)

export default StatisticsBody