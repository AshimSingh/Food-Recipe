import { useParams } from "react-router-dom"
import { useFetchData } from "../components/useFetchData"
const FullRecipe = () => {
  const {id} =useParams()
  const {data} = useFetchData(id)
  return (
    <div className='chefBox'>
        <div className='fullRecipe margin'>
        <img src={data.thumbnail_url} alt='momo'></img>
        <h1 style={{margin:'20px 0px'}}>{data.name}</h1>
        <h3>Ingredents:</h3>
        <ul>
            <li>Maida</li>
        <li>Cabbage</li>
        <li>Onion</li>
        <li>Oil</li>
        <li>Tomato</li>
        </ul>
        <h3>Recipe:</h3>
        <p>
            {data.description}
        </p>
        </div>
      
    </div>
  )
}

export default FullRecipe
