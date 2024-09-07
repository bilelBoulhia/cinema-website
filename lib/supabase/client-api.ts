
import {createClient } from "@/lib/supabase/client";

const supabaseClient = createClient();
export async function fetch(table:string ,json:boolean ){

    const { data: data } =   await supabaseClient.from(table).select();
    return json ? JSON.stringify(data, null, 2) : data ;
}