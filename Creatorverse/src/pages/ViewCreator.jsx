
import ContentCreator from "../Components/card"
import { useState, useEffect } from "react"
import supabase from "../client"
import { useNavigate, useParams } from "react-router-dom"

export default function ViewCreator() {
        const {id} = useParams();
        const navigate = useNavigate();
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
                <button onClick={() => navigate('/')}>Go back to Main</button>
                 <br/>
                <button onClick ={() => navigate('/showCreators')}>Go back to all creators</button>
                {fetchError && <p>{fetchError}</p>}
                {creator && (
                 <div>
        

                <ContentCreator id = {creator.id} name ={creator.name} URL={creator.Url} description={creator.description} image={creator.imageURL}/>
        
                 </div>
      )}
    </div>
        )
}