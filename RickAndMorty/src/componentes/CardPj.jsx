import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../componentes/CardPj.css'

export const CardPj = ({pj}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ pj.image }/>
      <Card.Body>
        <Card.Title>{ pj.name }</Card.Title>
        <Card.Text>
          Status: { pj.status }
        </Card.Text>
        <Card.Text>
          Species: { pj.species }
        </Card.Text>
        <Card.Text>
          Id: { pj.id }
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  )
}
