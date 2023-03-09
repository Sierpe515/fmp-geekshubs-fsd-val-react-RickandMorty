import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FormCharacter } from '../componentes/FormCharacter';


export const NewCharacter = () => {
    return (
        <Container fluid className="homeContainer">
        <Row className="d-flex justify-content-center">
            <Col lg={5} sm={8} className="my-3">
                <h1>NewCharacter</h1>
                <FormCharacter/>
            </Col>
        </Row>
        </Container>
    )
}
