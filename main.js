async function search(page = 1) {
    const query = document.getElementById('searchQ').value;
    const url = `https://holidays.abstractapi.com/v1/?api_key=675e1a5ec7164b85aa5241f40c6f8552&country=US&year=2020&month=12&day=25&q=${query}`;
    results = await fetchData(url);
    currentPage = page;
    updateDisplay();
    makePages(results.length);
}

document.getElementById('searchButton').addEventListener('click', () => search(1));


search();
