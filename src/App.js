import styles from './App.module.css';
import {Route, Routes} from 'react-router-dom'
import Index from './Controllers/Index/Index'
import Home from './components/home/home'
import PieDePagina from './Controllers/PieDePagina/PieDePagina';
import { useLocation } from 'react-router-dom';
import {useSelector} from "react-redux"
function App() {

  const scroll =useSelector((state)=> state.scroll)
  const location = useLocation();
  console.log(scroll)
  return (

    <div className={scroll?`${styles.noScroll} ${styles.App}` :styles.App} >

      <Routes>        
        <Route path='/' element ={<Home/>}/>
        
      </Routes>
     
    </div>
  );
}

export default App;
