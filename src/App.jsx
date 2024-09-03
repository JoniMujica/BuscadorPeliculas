import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import {helpHttp} from "./helpers/httpHelper.js"
import Items from './components/Items.jsx'
function App() {

  const [peliculas, setPeliculas] = useState([]);
  const [texto, setTexto] = useState("");
  const [lenguaje, setLenguaje] = useState("es-ES")
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (texto) {
      helpHttp().get(`https://api.themoviedb.org/3/search/movie?query=${texto}&include_adult=false&language=${lenguaje}&page=${page}`).then(res=>{
        !res? setPeliculas(null) : setPeliculas(res.results);
        texto? setPage(page) : setPage(1);
    })
    }else{
      helpHttp().get(`https://api.themoviedb.org/3/movie/now_playing?language=${lenguaje}&page=${page}`).then(res=>{
        !res? setPeliculas(null) : setPeliculas(res.results);
      })
    }

    //console.log(peliculas)

  }, [page,texto,lenguaje])
  

   const HandleChange = (e) =>{
      (e.target.id).includes("peliculas")? setTexto(e.target.value) : setLenguaje(e.target.value);
  }
  /*const HandleChangeLanguage = (e) =>{
      setLenguaje(e.target.value)
   }*/
  return (
    <>
      <h1>Busqueda de peliculas</h1>
      <Formulario change={HandleChange} /*changeL={HandleChangeLanguage}*/ texto={texto} />
      {!peliculas? <h1>Sin Datos</h1> : <Items resultados={peliculas} /> }
    </>
  )
}

export default App
