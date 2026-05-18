import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react"


const URL = "https://eubuchqxdrxxilfecroi.supabase.co"
const APIKEY = "sb_publishable_V_rE-CVhAHp07RpgLpyLdQ_oGw2LM4c"
const supabase = createClient(URL, APIKEY)



export default supabase

