import React from 'react'
import {Card, Badge} from 'react-bootstrap'
const RecipeCard = (props) => {
  return (
    <Card style={{ width: '20rem' }}>
    <Card.Body>
      <Card.Title>{props.recipe.label.split(" ").slice(0, 20).join(" ")}</Card.Title>
      <Card.Text>
          {props.recipe.healthLabels.map((el,index) => <Badge style={{marginRight:5}} key="index" pill variant="primary">{el}</Badge>  )}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}
export default RecipeCard