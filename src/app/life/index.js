import React from 'react'
import { connect } from 'dva'
import Thingshead from './things_head'
import Things from './things'

const LifeComponent = () => {
  return (
    <div>
      <Thingshead />

      <Things />
    </div>
  )
}

export default connect()(LifeComponent)
