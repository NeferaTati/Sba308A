import { display } from "./display.js";

const url = "https://api.thecatapi.com/v1/breeds?limit=20";
const api_key = "live_3NTTQ3aWTlMRY9r0A4cRrwciVtCao2XDppsZOtEoJ6ni0ZfMhmqmVorONIYEfSTH"

export async function search() {
    // const query = document.getElementById('searchQ').value;
    try{
        const resp = await fetch(url,{
            headers: 
        {'x-api-key': api_key }
        
    });
    // currentPage = page;

        const data = await resp.json()
        console.log(data)
        display(data)
}catch(e){
    console.log(e.message)
}
    
    // updateDisplay();
    // makepages(results.length);
}






// api fetch code 
// const url = 
// export const fetchData = async (url) => {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching data, sorry try again ;) :', error);
//     }
// };
//     fetchData(url)
     
//     /// function to make search bar and pages with data
//     //Url stored in url to make fetch or fetch outside of try-catch with out variable? decisions
//     function search(page = 1) {
//         const query = document.getElementById('searchQ').value;
//         const url = `https://api.thecatapi.com/v1/breeds/${query}`;
    
//         try {
//             fetch(url)
//                 .then(response => response.json())
//                 .then(data => {

//                     console.log(data)
//                     // displayResults(data);
//                     // setupPagination(data.length, page);
//                 })
//                 .catch(error => console.error('Error fetching data, sorry try again ;) :', error));
//         } catch (error) {
//             console.error('Error fetching data, sorry try again ;) :', error);
//         }
//     }

