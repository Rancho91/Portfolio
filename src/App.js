import styles from './App.module.css';
import {Route, Routes} from 'react-router-dom'
import Index from './Controllers/Index/Index'
import Home from './Controllers/Home/Home'
import PieDePagina from './Controllers/PieDePagina/PieDePagina';
import { useLocation } from 'react-router-dom';


function App() {


  const location = useLocation();
  return (

    <div className={styles.App}>
      <Routes>

        <Route path='/' element={<Index/>}/>
        
        <Route path='/home' element ={<Home/>}/>
        
      </Routes>
      <div>
        {location.pathname!=='/'&& <PieDePagina />}
      </div>
     
    </div>
  );
}

export default App;
