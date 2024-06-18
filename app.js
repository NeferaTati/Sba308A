
// api fetch code 
function httpGetAsync(url, callback) {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", url, true); // true for asynchronous
        xmlHttp.send(null);
    }

    const url = "https://holidays.abstractapi.com/v1/?api_key=675e1a5ec7164b85aa5241f40c6f8552&country=US&year=2020&month=12&day=25"

    httpGetAsync(url)
     
    /// function to make search bar and pages with data
    //Url stored in url to make fetch or fetch outside of try-catch with out variable? decisions
    function search(page = 1) {
        const query = document.getElementById('searchQuery').value;
        const url = `https://holidays.abstractapi.com/v1/?api_key=675e1a5ec7164b85aa5241f40c6f8552&country=US&year=2020&month=12&day=25`;
    
        try {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    displayResults(data);
                    setupPagination(data.length, page);
                })
                .catch(error => console.error('Error fetching data, sorry try again ;) :', error));
        } catch (error) {
            console.error('Error fetching data, sorry try again ;) :', error);
        }
    }
//     let page1 = 0
//     const lastpage = 6

//     async function search()
//     ///try - catch 
//     try{
//         const query = document.getElementById('searchQuery').value;
//         fetch(`"https://holidays.abstractapi.com/v1/?api_key=675e1a5ec7164b85aa5241f40c6f8552&country=US&year=2020&month=12&day=25"
// `)
//         .then(response => response.json())
//         .then(data => {
//                     displayRes(data.results);
//                         setupPagination(data.total, page);
//         })
//         .catch(error => console.error('Error fetching data, sowwy try again ;) :', error));
// }}
    
/// display of the api data
function displayRes(results) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = results.map(item => `<div class="item">${item.name}</div>`).join('');
}
// this will make the pages, "pagination"

function makepages(){
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    const totalPages = Math.ceil(total / perPag);

}