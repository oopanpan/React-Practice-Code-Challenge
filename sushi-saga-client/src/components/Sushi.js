import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {id, name, price, img_url} = props.sushi
  return (
    <div className="sushi" >
      <div className="plate" 
           onClick={()=>props.eatSushi(id, price)}>
        { 
          props.eatenSushiID.includes(id) ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi