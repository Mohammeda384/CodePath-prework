
import ContentCreator from "../Components/card"
import { useState, useEffect } from "react"
import supabase from "../client"
import { useParams } from "react-router-dom"
export default function ViewCreator() {
        const {id} = useParams()
        const [fetchError, setFetchError] = useState(null);
        const [creator, setCreator] = useState(null);

  useEffect(() => {
      const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", id)
        .single()

      if (error) {
        setFetchError("Could not fetch creators");
        setCreator(null);
        console.log(error)
      }

      if (data) {
        setCreator(data)
        setFetchError(null)
      }
    }

        fetchCreator()
        }, [id])


        return (
              <div>
      {fetchError && <p>{fetchError}</p>}
      {creator && (
        <div>
          {/* <h1>{creator.name}</h1>
          <p>{creator.Url}</p>
          <p>{creator.description}</p>
          <img src={creator.imageURL} /> */}

          <ContentCreator id = {creator.id} name ={creator.name} URL={creator.Url} description={creator.description} image={creator.imageURL}/>
        </div>
      )}
    </div>
        )
}