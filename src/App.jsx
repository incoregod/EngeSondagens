
import LandingPage from "./main_components/LandingPage"
import MainPage from "./main_components/MainPage"
import {useState} from 'react'





function App() {

  const [pageLoaded, setPageLoaded] = useState(false)
  const [pageHide, setPageHide] = useState(false)



  function loadAnim() {
      setPageLoaded(true)
      setTimeout(() => {
        setPageHide(true)
      }, 1000);
      
  }

  return (
    <>
    {!pageHide && <LandingPage pageLoaded={pageLoaded} loadAnim={loadAnim}/>}
    {pageLoaded &&<MainPage/>}
    </>
  );
}


export default App;
