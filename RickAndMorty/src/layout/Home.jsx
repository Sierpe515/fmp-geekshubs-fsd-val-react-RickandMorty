import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { CardPj } from '../componentes/CardPj';
import { Navbar1 } from '../componentes/Navbar1';
import { data } from '../data/dataBase';

import './Home.css'

export const Home = () => {
    return (
        <Container fluid className="homeContainer">
            {/* <Row>
                <Navbar1/>
            </Row> */}
            {/* <h1>Rick and Morty: Characters</h1> */}
            <Row>
                <h1>Rick & Morty APP</h1>
            </Row>
            <Row className="d-flex justify-content-center">
                {/* <ol>
                    {data.map(pj=> {return <CardPj key={pj.id} pj= {pj}/>})}
                </ol> */}
                {data.map(pj => {
                    return (
                        <Col key={pj.id} lg={2} sm={4} className="my-3">
                            <CardPj className="cardBody" pj={pj}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>

    )
}