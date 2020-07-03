import React , {useState} from 'react'
import {Jumbotron,Container,InputGroup,FormControl,Button} from 'react-bootstrap'
const SearchBoxComponent = (props) => {
  const [input, setInput] =useState("")

  const SearchFood = (e) => {
    e.preventDefault();
    if(input.trim()==='') {
      alert("Empty input is not allowed!")
      return;
    }
    props.searchItem(input)
    setInput("")
  }
  return (
    <Jumbotron fluid>
      <Container>
        <form onSubmit={ (e) => SearchFood(e) }>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Food and Recipe"
              aria-label="Search"
              aria-describedby="basic-addon2"
              value={input}
              onChange={(e) =>setInput(e.target.value)}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" type="submit">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </form>
      </Container>
    </Jumbotron>

  )
}
export default SearchBoxComponent