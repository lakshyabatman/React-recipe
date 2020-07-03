import React from 'react'
import {Card, Badge} from 'react-bootstrap'
const DishCard = (props) => {
  return (
    <Card style={{ width: '20rem',height:'10rem', marginTop:100 }}>
    <Card.Body>
      <Card.Title>{props.food.label}</Card.Title>
      <Card.Text>
        <Badge pill variant="primary">{props.food.category}</Badge>{' '}
      <Badge pill variant="secondary">
        KCals : {Math.round(props.food.nutrients.ENERC_KCAL)}
      </Badge>{' '}
      <Badge pill variant="success">
        Protien : {Math.round(props.food.nutrients.PROCNT)}
      </Badge>{' '}
      <Badge pill variant="danger">
        Fat : {Math.round(props.food.nutrients.FAT)}
      </Badge>{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}
export default DishCard