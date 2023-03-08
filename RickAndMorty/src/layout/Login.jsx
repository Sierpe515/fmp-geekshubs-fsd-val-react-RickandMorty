import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FormLogin } from "../componentes/FormLogin"


export const Login = () => {
    return (
        <Container fluid className="homeContainer">
        <Row className="d-flex justify-content-center">
            <Col lg={5} sm={4} className="my-3">
                <h1>Login</h1>
                <FormLogin/>
            </Col>
        </Row>
        </Container>
    )
}