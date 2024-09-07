
import {createClient } from "@/lib/supabase/server";

const supabaseServer = createClient();
export async function fetch(table:string ,json:boolean = false){

    const { data } =   await supabaseServer.from(table).select();
    return json ? JSON.stringify(data, null, 2) : data ;
}