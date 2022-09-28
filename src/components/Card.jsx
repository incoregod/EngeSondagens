import {Link} from 'react-router-dom'



function Card(props) {
    console.log(props.img)
    return (
        <div className='card'>
                <img src= {`../assets/${props.img}`}></img>
                <h1> {props.title}</h1>
                <p>{props.description} <span><Link to="/captacao">Ler mais</Link></span> </p>
                
        </div>
    )
}

export default Card