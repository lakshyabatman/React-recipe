import React from 'react';
import {Button, Container} from 'react-bootstrap'
import {FILTER_TYPES} from '../../+store/actions/actionTypes'
import '../../assets/style/Filter.css'
const Filter = (props) => {
  if(props.dishes || props.recipes) {
    return (
      <div className="filter-wrapper">
        <Container>
          <h3>Filter By</h3>
          <Button variant="primary" onClick={() => props.addFilter(FILTER_TYPES.BALANCED)}>Balanced</Button>{' '}
          <Button variant="secondary" onClick={() => props.addFilter(FILTER_TYPES.HIGH_CARB)}>High Carb</Button>{' '}
          <Button variant="success" onClick={() => props.addFilter(FILTER_TYPES.HIGH_PROTIEN)}>High Protien</Button>{' '}
        </Container>
      </div>
    )
  }else {
    return (<div></div>)
  }

}

export default Filter