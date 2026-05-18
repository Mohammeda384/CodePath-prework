import supabase from "../client"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [creator, setCreator] = useState({
    name: "",
    Url: "",
    description: "",
    imageURL: ""
  })

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", id)
        .single()

      if (data) setCreator(data)
    }
    fetchCreator()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await supabase
      .from("creators")
      .update(creator)
      .eq("id", id)
    navigate("/showCreators")
  }

  const handleDelete = async () => {
  await supabase
    .from("creators")
    .delete()
    .eq("id", id)
  navigate("/showCreators")
    }

  return (
    <>
      <h1>Edit Creator</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" value={creator.name} onChange={(e) => setCreator({...creator, name: e.target.value})} /><br />
        <label>Link to their page: </label>
        <input type="text" value={creator.Url} onChange={(e) => setCreator({...creator, Url: e.target.value})} /><br />
        <label>Description: </label>
        <input type="text" value={creator.description} onChange={(e) => setCreator({...creator, description: e.target.value})} /><br />
        <label>Image URL: </label>
        <input type="text" value={creator.imageURL} onChange={(e) => setCreator({...creator, imageURL: e.target.value})} /><br />
        <input type="submit" value="Save Changes" />
      </form>
      <button onClick = {handleDelete}>Delete</button>
    </>
  )
}