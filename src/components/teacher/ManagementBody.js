/**
 * Created by hanyile on 2017/8/19.
 */

import React from 'react'
import { Container, Card, Button } from 'semantic-ui-react'

const ManagementBody = () => (
    <Container className="HistoryContainer">
      <Card.Group itemsPerRow={3}>
        <Card>
          <Card.Content>
            <Card.Header>
              软件1501班
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>Modify</Button>
              <Button basic color='red'>Delete</Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>
              软件1502班
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>Modify</Button>
              <Button basic color='red'>Delete</Button>
            </div>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>
              软件1503班
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>Modify</Button>
              <Button basic color='red'>Delete</Button>
            </div>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>
              软件1504班
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>Modify</Button>
              <Button basic color='red'>Delete</Button>
            </div>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>
              软件1505班
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>Modify</Button>
              <Button basic color='red'>Delete</Button>
            </div>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>
              网络1501班
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>Modify</Button>
              <Button basic color='red'>Delete</Button>
            </div>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>
              网络1502班
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>Modify</Button>
              <Button basic color='red'>Delete</Button>
            </div>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <div className='ui two buttons'>
              <Button basic color='blue'>Add A New Year</Button>
            </div>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='blue'>Add A New Class</Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
)

export default ManagementBody