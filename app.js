
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
    
    let page1 = 0
    const lastpage = 6

    async function searchbar( page1 = 0)
    ///try - catch 
    try{
        const query = document.getElementById('searchQuery').value;
        fetch(`"https://holidays.abstractapi.com/v1/?api_key=675e1a5ec7164b85aa5241f40c6f8552&country=US&year=2020&month=12&day=25"
`)
    }