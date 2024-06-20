const div = document.getElementById("main-ctn")

export function display(data){
    let newCat = "";

    data.forEach(element => {
        newCat +=`
        <img src="${element.image.url}"width = "400px" height= "400px" />
        `
        
    });

div.innerHTML = newCat;
}

const div2 = document.getElementById("carousel")

export function displaywrd(data){
    let newCat = "";

    data.forEach(element => {
        catShw +=`
        <img src="${element.image.url}"width = "400px" height= "400px" />
        `
        
    });

div2.innerHTML = catShw;
}

// 