import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardPj = ({pj}) => {
  return (
    <>
      {[
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          // style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Img variant="top" src={ pj.image }/>
          <Card.Body>
            <Card.Title> { pj.name } </Card.Title>
            <Card.Text>
              Status: { pj.status }
            </Card.Text>
            <Card.Text>
              Species: { pj.species }
            </Card.Text>
            <Card.Text>
              Id: { pj.id }
            </Card.Text>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">Ver más</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
    
  )
}

{/* <Card style={{ width: '18rem' }}>
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
    </Card> */}
