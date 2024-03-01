import React from 'react'
import { Card } from 'react-bootstrap'

const PlayerCard = ({img,name,statistics}) => {

 // const{img,name,statistics}=player
  return (
    <Card>

<Card.Img variant="top" src={img}/>
    </Card>
  )
}

export default PlayerCard