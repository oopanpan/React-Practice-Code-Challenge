import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {
          props.currentSushi.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} eatenSushiID={props.eatenSushiID}/>)
        }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer