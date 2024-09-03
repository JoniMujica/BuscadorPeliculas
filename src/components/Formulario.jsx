


const Formulario = ({change,texto}) =>{
    return(
    <>
        <form>
            <label htmlFor="peliculas">Peliculas</label>
            <input id="peliculas" type="text" placeholder="Ingrese nombre de pelicula" value={texto} onChange={change} />
            <select onChange={change}>
                <option value="es-ES" selected>Español</option>
                <option value="en-US" >Ingles</option>
            </select>
        </form>
    </>
    )

}
export default Formulario;