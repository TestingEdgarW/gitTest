const btnGallery = document.querySelector('#gallery');
let flag = "white";

const myGallery = GLightbox({
    elements: [
        {
            'href': 'https://es.web.img3.acsta.net/pictures/210/435/21043523_20130924162430319.jpg',
            'type': 'image',
            'alt': 'A Fistful of Fingers poster'
        },
        {
            'href': 'https://m.media-amazon.com/images/I/51E-Qh2UxzL._AC_.jpg',
            'type': 'image',
            'alt': 'Shaun of the Dead poster'
        },
        {
            'href': 'https://m.media-amazon.com/images/I/51nv39wuS4L._AC_.jpg',
            'type': 'image',
            'alt': 'Hot Fuzz poster'
        },
        {
            'href': 'https://m.media-amazon.com/images/I/51OtrgdQrlL._AC_.jpg',
            'type': 'image',
            'alt': 'Scott Pilgrim vs. the World poster'
        },
        {
            'href': 'https://m.media-amazon.com/images/I/717QDxYBkbL._AC_SY679_.jpg',
            'type': 'image',
            'alt': 'Baby Driver poster'
        },
        {
            'href': 'https://somosg.com/wp-content/uploads/2021/09/Last-Night-in-Soho.webp',
            'type': 'image',
            'alt': 'Last Night in Soho poster'
        },
    ]
});

btnGallery.onclick = ()=>{
    myGallery.open();
}

const toggle = ()=>{
    const body = document.body;
    const elements = document.querySelectorAll(".day-night-style");
    const listElements = document.querySelectorAll(".list-style");

    for (let element of elements) {
        element.classList.toggle("hidden");
    }

    for (const listElement of listElements) {
        if(flag === "white"){
            listElement.style.backgroundColor = "black";
            listElement.style.color = "white";
        }else{
            listElement.style.backgroundColor = "white";
            listElement.style.color = "black";
        }
    }

    if (flag === "white") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        
        flag = "black";
    }else{
        body.style.backgroundColor = "white";
        body.style.color = "black";

        flag = "white";
    }
}