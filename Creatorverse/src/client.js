import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react"


const URL = "https://eubuchqxdrxxilfecroi.supabase.co/rest/v1/"
const APIKEY = "sb_publishable_V_rE-CVhAHp07RpgLpyLdQ_oGw2LM4c"
const supabase = createClient(URL, APIKEY)


const Home = () => {
    const [fetchError, setFetchError] = useState(null);
    const [creators, setCreators] = useState(null);

    useEffect(() => {
        const fetchCreators = async () => {
            const {data, error} = await supabase
            .from("creators")
        }


    }, [])
}
export default supabase

