const perPage = 10;  // Items per page
let currentPage = 1;
let results = [];



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
//Loop time 
for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.innerHTML = i;
    button.addEventListener('click', () => {
        currentPage = i;
        updateDisplay();
    });
    pagination.appendChild(button);
}


function updateDisplay() {
const start = (currentPage - 1) * perPag;
const end = start + perPag;
displayRes(results.slice(start, end));
}


makePages();
updateDisplay();

    
    document.getElementById('search()').addEventListener('click', () => search(1));