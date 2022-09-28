import NavBar from "../components/NavBar";
import { Switch, Route } from "react-router-dom";
import Gestao from "../page_components/Gestao";
import Home from "../page_components/Home";
import Imoveis from "../page_components/Imoveis";
import Captacao from "../page_components/Captacao";
import Footer from "../components/Footer";

function MainPage() {
    return (
        <div>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/imoveis">
              <Imoveis />
            </Route>
            <Route path="/gestao">
              <Gestao />
            </Route>
            <Route path="/captacao">
              <Captacao />
            </Route>
          </Switch>
        </main>
        <Footer/>
      </div>
    )
}

export default MainPage