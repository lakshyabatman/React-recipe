import React from 'react'
import {Card, Badge} from 'react-bootstrap'
const RecipeCard = (props) => {
  return (
    <Card style={{ width: '20rem',height:'10rem' }}>
    <Card.Body>
        Test
      {/* <Card.Title>{props.food.label}</Card.Title> */}
      <Card.Text>
        Test

        {/* <Badge pill variant="primary">{props.food.category}</Badge>{' '} */}
      <Badge pill variant="secondary">
        Test
        {/* KCals : {Math.round(props.food.nutrients.ENERC_KCAL)} */}
      </Badge>{' '}
      <Badge pill variant="success">
        Test
        {/* Protien : {Math.round(props.food.nutrients.PROCNT)} */}
      </Badge>{' '}
      <Badge pill variant="danger">
        Test
        {/* Fat : {Math.round(props.food.nutrients.FAT)} */}
      </Badge>{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}
export default RecipeCard