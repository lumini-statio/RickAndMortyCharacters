import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './components/public/Main';
import Navbar from './components/public/Navbar';
import Footer from './components/public/footer';
import Detail from './components/public/Detail';
import UserForm from './components/public/UserForm';

function App() {
  return (
    <div>
      
    <Navbar/>

      <Routes>
        <Route exact path='/' Component={Main}/>
        <Route path='/detail/:id' Component={Detail}/>
        <Route path='/user-form' Component={UserForm}/>
      </Routes>

    <Footer/>

    </div>
  );
}

export default App;
