/**
 * Created by hanyile on 2017/8/17.
 */

import React from 'react'
import { Grid } from 'semantic-ui-react'

import ProfileWrap from './ProfileWrap'
import GuideWrap from './GuideWrap'

const ProfileBody = () => (
    <Grid divided='vertically' className="BodyGrid">
      <Grid.Row columns={2}>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <ProfileWrap />
        </Grid.Column>

        <Grid.Column mobile={16} tablet={16} computer={8}>
          <GuideWrap />
        </Grid.Column>
      </Grid.Row>
    </Grid>
)

export default ProfileBody