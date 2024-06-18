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

