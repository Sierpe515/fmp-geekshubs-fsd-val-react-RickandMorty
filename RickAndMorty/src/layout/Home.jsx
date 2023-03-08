

import { CardPj } from '../componentes/CardPj';
import { Navbar1 } from '../componentes/Navbar1';
import { data } from '../data/dataBase';

import './Home.css'

export const Home = () => {
    return (
        <>
        <Navbar1/>
        <h1>Rick and Morty: Characters</h1>
        {/* <code>{JSON.stringify(data[0])}</code> */}
        <ol>
            {data.map(pj=> {return <CardPj key={pj.id} pj= {pj}/>})}
        </ol>
        </>
    )
}