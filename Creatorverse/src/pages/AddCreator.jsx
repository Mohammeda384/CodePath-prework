import supabase from "../client"
import { useState } from "react"

export default function AddCreator(){
    const [creator, setCreator] = useState({name: "",
     Url: "",
     description: "",
     imageURL: ""})

    const handleSubmit = async (e) => {
    e.preventDefault()
    await supabase.from("creators").insert([creator])
    }
    return (
        <>
        <h1>Add Creator</h1>
        <form  onSubmit={handleSubmit}>
            <li>
            <label>Name: </label> <br></br>
            <input type="text" name="name" value = {creator.name} onChange={(e) => setCreator({...creator, name: e.target.value})}/> <br></br>
            <label>Link to their page: </label> <br></br>
            <input type="text" name="url" size = "50" value = {creator.url} onChange={(e) => setCreator({...creator, Url: e.target.value})}/> <br></br>
            <label>Description of who they are/what they do: </label> <br></br>
            <input type="text" name="description" value = {creator.description}  onChange={(e) => setCreator({...creator, description: e.target.value})}/> <br></br>
            <label>How they look like (A link to their image): </label> <br></br>
            <input type="text" name="imageUrl" size = "50" value = {creator.imageUrl} onChange={(e) => setCreator({...creator, imageURL: e.target.value})}/> <br></br>
            <input type = "submit"/>
            </li>
          
        </form>
        </>
    )
}

