let currentBook = 0;

function init(){
    renderBooks();
}

function renderBooks(){

    const bookListRef = document.getElementById("book_shelf");
    bookListRef.innerHTML = "";

    for(let index = 0; index < bookList.length; index++){
        // const book = bookList[index];
        bookListRef.innerHTML += getBooksTemplate(index);
        renderComments(index);
    }
}

function renderComments(index){
    const bookCommentRef = document.getElementById("comment_section");
    bookCommentRef.innerHTML = "";

    for(let commentIndex = 0; commentIndex < bookList[index].comments.length; commentIndex++){
        // const comment = bookList[index].comments[commentIndex];
        bookCommentRef.innerHTML += getCommentsTemplate(index, commentIndex);
    }
}

// function getCommentsTemplate(index, commentIndex){

// }


// Variablen in html template einbinden

// Like-Funktion: Onclick Button Bild Ändern + Likes +1/-1
// Kommentar-Funktion: Text aus Input auslesen und als Kommentar hinzufügen

// Bonus: Local Storage
// Bonus: Favoriten markieren & anzeigen lassen

// Optional: Buch im Dialog-Fenster öffnen lassen
// 