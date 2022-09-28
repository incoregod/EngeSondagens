import { useContext } from "react";
import Card from "../components/Card";
import Vantagens from "../components/Vantagens";
import info from "../info";
import {ThemeContext} from '../ThemeContext'



function Home() {
  const {theme} = useContext(ThemeContext)

  const cardEl = info.map((obj)=>{
    return <Card key={obj.id} img={obj.coverImg} title={obj.title} description={obj.description}/>
  })

  return (
    <div className="app-container">
      <div className={`${theme}-theme grid`}>
      {cardEl}
      </div>
      <Vantagens />
    </div>
  )
}

export default Home;
