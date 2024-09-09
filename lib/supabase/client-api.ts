
import {createClient } from "@/lib/supabase/client";

const supabaseClient = createClient();
export async function fetch<T>(
    table: string,
    json: boolean = false,
    columns:string[] = ['*'],
    SecondaryQuery?:(query:any) => any ,

): Promise<T[]> {


    let query =  supabaseClient.from(table).select(columns.join(', '));
    const { data } = SecondaryQuery ? await  SecondaryQuery(query) : await query;



    return json ? JSON.parse(JSON.stringify(data)) : (data as T[]);
}