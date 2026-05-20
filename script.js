

function init(){
    
    renderBooks();
}

function renderBooks(){
    let bookRef = document.getElementById("book_shelf");
    bookRef.innerHTML = "";
    bookRef.innerHTML += getBooksTemplate();
}

