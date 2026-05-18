import { useEffect, useState } from "react";
import ContentCreator from "../Components/card"
import supabase from "../client";
import { Link } from "react-router-dom";
export default function ShowCreators() {
  const [fetchError, setFetchError] = useState(null);
  const [creators, setCreators] = useState(null);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()

      if (error) {
        setFetchError("Could not fetch creators");
        setCreators(null);
        console.log(error)
      }

      if (data) {
        setCreators(data)
        setFetchError(null)
      }
    }

    fetchCreators()
  }, [])

  return (
    <div>
      {fetchError && (<p>{fetchError}</p>)}
      {creators && (
        <div>
        <h1>List of creators</h1>
        <br></br>
          {creators.map(creator => (
          <>
           <h2>
              <Link to = {`/viewCreator/${creator.id}`}> {creator.name}
             
             
             </Link>
                 <ContentCreator id={creator.id}/>
             <br></br>
           </h2>
           
          </>
           
        
          ))}
        </div>
      )}

   
    </div>
  )
}