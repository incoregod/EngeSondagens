import Card from "../components/Card";
import Vantagens from "../components/Vantagens";
import info from "../info";



function Home() {

  const cardEl = info.map((obj)=>{
    return <Card key={obj.id} img={obj.coverImg} title={obj.title} description={obj.description}/>
  })

  return (
    <div className="app-container">
      <div className="grid">
      {cardEl}
      </div>
      <Vantagens />
    </div>
  )
}

export default Home;
