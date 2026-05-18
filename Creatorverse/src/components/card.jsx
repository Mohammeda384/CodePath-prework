import { useNavigate } from "react-router-dom"

export default function ContentCreator({id, name, URL, description, image}){
    const navigate = useNavigate();
  
    return (
        <div>
            <h1>{name}</h1>
            <a href= {URL}></a>
            <p>{description}</p>
            <img  style={{width: "400px", height: "400px", objectFit: "cover"}} src = {image} />
            <br></br>
            <button onClick={() => navigate(`/editCreator/${id}`)}> Edit </button>
        </div>
    )

}