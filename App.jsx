import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
//import SearchBar from './components/SearchBar/SearchBar.jsx';
//import characters,  {} from './data.js';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import axios from "axios";
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from "./components/Favorites/Favorites.jsx"

function App() {

   const [characters, setCharacters] = useState([])

   const [access, setAccess] = useState(false)
   const navigate = useNavigate()
   const EMAIL = "victoriamegaray@gmail.com"
   const PASSWORD = "123456"

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true)
         navigate("/home")
      }
   }

   useEffect(() => {
      !access && navigate("/")
   }, [access, navigate])

   const { pathname } = useLocation()

   const onClose = (id) => {

      let filterCharacters = characters.filter((ch) => { return ch.id !== id })

      setCharacters(filterCharacters)

   }

   function onSearch(id) {
      axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-jlpodesta`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }

   return (
      <div className='App'>      

         {pathname !== "/" && <Nav onSearch={onSearch} />}

         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites/' element={<Favorites />} />
         </Routes>        
      </div>
   );
}

export default App;

  
  

