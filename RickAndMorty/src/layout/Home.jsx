
import { CardPj } from '../componentes/CardPj'
import { Navbar1 } from '../componentes/Navbar1'
import './Home.css'

export const Home = () => {
    return (
        <>
        <Navbar1/>
        <h1>Rick and Morty: Characters</h1>
        <CardPj/>
        </>
    )
}