/**
 * Created by hanyile on 2017/8/15.
 */

import React from 'react'
import { Grid } from 'semantic-ui-react'

import TaskWrap from './TaskWrap'
import ListWrap from './ListWrap'

const StudentBody = () => (
    <Grid divided='vertically' className="BodyGrid">
      <Grid.Row columns={2}>
        <Grid.Column mobile={16} tablet={16} computer={6}>
          <TaskWrap />
        </Grid.Column>

        <Grid.Column mobile={16} tablet={16} computer={10}>
          <ListWrap />
        </Grid.Column>
      </Grid.Row>
    </Grid>
)

export default StudentBody