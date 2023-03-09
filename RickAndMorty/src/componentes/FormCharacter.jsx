import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export const FormCharacter = () => {

  let user = {
    name: "",
    status: "",
    species: "",
    id: ""
  }

  const [valor, setValor] = useState(user);
  const {name, status, species, id} = valor;

  const newValue = ({target})=>{
    console.log(valor);
    const {name, value}=target
    setValor({
        ...valor,
        [name]:value
        }
    )
  }

const checkValue = (event)=>{
  event.preventDefault();
  console.log(valor)
}

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter email" name="name" value={name} onChange={newValue} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control type="text" placeholder="Enter status" name="status" value={status} onChange={newValue} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridSpecies">
          <Form.Label>Species</Form.Label>
          <Form.Control type="text" placeholder="Enter species" name="species" value={species} onChange={newValue} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridId">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Enter id" name="id" value={id} onChange={newValue} />
        </Form.Group>
      </Row>

      <hr />

      <Button variant="primary" type="submit" onClick={checkValue}>
        Submit
      </Button>
    </Form>
    
  )
}
