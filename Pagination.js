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
for (let i = 1; i <= totalPages;  i++) {
    const element = document.createElement("h2");
    element.innerHTML = totalPages[i].totalPages.name;
    
    moveSet.appendChild(element);}

    // for (let i = 1; i <= totalPages; i++) {
    //     const button = document.createElement('button');
    //     button.textContent = i;
    //     button.disabled = (i === page);
    //     button.onclick = () => search(i);
    //     pagination.appendChild(button);
    // }
//event listener
    document.getElementById('search()').addEventListener('click', () => search(1));