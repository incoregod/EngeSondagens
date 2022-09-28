import { useContext } from 'react'
import {Link} from 'react-router-dom'
import {ThemeContext} from '../ThemeContext'




function Card(props) {
    const{theme}= useContext(ThemeContext)
    return (
        <div className= {`${theme}-theme card`}>
                <img src= {`../assets/${props.img}`}></img>
                <h1> {props.title}</h1>
                <p>{props.description} <span><Link to="/captacao">Ler mais</Link></span> </p>
                
        </div>
    )
}

export default Card