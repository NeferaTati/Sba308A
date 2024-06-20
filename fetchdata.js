
// api fetch code 
const url = `https://holidays.abstractapi.com/v1/?api_key=675e1a5ec7164b85aa5241f40c6f8552&country=US&year=2020&month=12&day=25`;
    

export const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data, sorry try again ;) :', error);
    }
};
    fetchData(url)
     
    /// function to make search bar and pages with data
    //Url stored in url to make fetch or fetch outside of try-catch with out variable? decisions
    function search(page = 1) {
        const query = document.getElementById('searchQ').value;
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

