/**
 * Created by hanyile on 2017/8/17.
 */

import React from 'react'
import { Grid } from 'semantic-ui-react'

import TaskWrap from './TaskWrap'
import ListWrap from './ListWrap'

const TeacherBody = () => (
    <Grid divided='vertically' className="BodyGrid">
      <Grid.Row columns={2}>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <TaskWrap />
        </Grid.Column>

        <Grid.Column mobile={16} tablet={16} computer={8}>
          <ListWrap />
        </Grid.Column>
      </Grid.Row>
    </Grid>
)

export default TeacherBody