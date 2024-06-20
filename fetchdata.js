//import to connect functions to the different module files

import { display } from "./display.js";

const url = "https://api.thecatapi.com/v1/breeds?limit=30";
const api_key = "live_3NTTQ3aWTlMRY9r0A4cRrwciVtCao2XDppsZOtEoJ6ni0ZfMhmqmVorONIYEfSTH"

//async function 

export async function search() {
    
    try{
        const resp = await fetch(url,{
            headers: 
        {'x-api-key': api_key }
        
    });
    

        const data = await resp.json()
        console.log(data)
        display(data)
}catch(e){
    console.log(e.message)
}};
