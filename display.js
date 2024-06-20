const div = document.getElementById("main-ctn")

export function display(data){
    let newCat = "";

    data.forEach(element => {
        newCat +=`
        <img src="${element.image.url}"/>
        `
        
    });

div.innerHTML = newCat;
}


// const perPage = 10;  // Items per page
// let currentPage = 1;
// let results = [];

// /// display of the api data
// export function displayRes(results) {
//     const gallery = document.getElementById('gallery');
//     gallery.innerHTML = results.map(item => `<div class="item">${item.name}</div>`).join('');
// }
// // this will make the pages, "pagination"

// export function makepages(){
//     const pagination = document.getElementById('pagination');
//     pagination.innerHTML = '';
//     const totalPages = Math.ceil(total / perPage);
// }
// //Loop time 
// const totalPages = []

// for (let i = 1; i <= totalPages; i++) {
    
    
//     const button = document.createElement("button");
//     button.innerHTML = i;
//     button.addEventListener('click', () => {
//         currentPage = i;
//         updateDisplay();
//     });
//     pagination.appendChild(button);
// }


// export function updateDisplay() {
// const start = (currentPage - 1) * perPage;
// const end = start + perPage;
// displayRes(results.slice(start, end));

// }