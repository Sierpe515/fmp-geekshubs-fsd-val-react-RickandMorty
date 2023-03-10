import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export const FormGrid = () => {

  let user = {
    name: "",
    surname: "",
    email: "",
    password: ""
  }

  const [valor, setValor] = useState(user);
  const {name, surname, email, password} = valor;

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
          <Form.Control type="text" placeholder="Enter name" name="name" value={name} onChange={newValue} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" placeholder="Enter surname" name="surname" value={surname} onChange={newValue} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={newValue} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={newValue} />
        </Form.Group>
      </Row>

      <hr />

      <Button variant="primary" type="submit" onClick={checkValue}>
        Submit
      </Button>
    </Form>
    
  )
}
