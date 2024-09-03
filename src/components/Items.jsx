import "../styles/cards.css"

const ItemCard = ({resultado}) => {
    //console.log(resultado)

    
    /*const handleLoad = (e) => {
        console.log(e.target.style.display);
    }*/
    return(
        <div className="gallery-item">
            {resultado.poster_path && <img  src={`https://image.tmdb.org/t/p/w400/${resultado.poster_path}`} alt={resultado.title} className="item-image" />}
            <figcaption className="item-description">
                <h2 className="name">{resultado.title}</h2>
                <span className="desc">{resultado.overview}</span>
            </figcaption>
        </div>
    )
}
const Items = ({resultados}) =>{
    return(
        <div className="container">
            <div className='gallery-wrapper'>
                {resultados.map((el,index) => <ItemCard resultado={el} key={index} /> )}
            </div>
        </div>
        
    )
        
}
export default Items;

/*
<div>
            
        
        {arr.map((el ,key) =>
            <div key={key}>
                <h2>{el}</h2>
            </div>
            )}

        </div>
        */