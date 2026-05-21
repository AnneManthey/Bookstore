
function init() {
    renderBooks();
}

function renderBooks() {
    const bookListRef = document.getElementById("book_shelf");
    bookListRef.innerHTML = "";

    for (let index = 0; index < bookList.length; index++) {
        bookListRef.innerHTML += getBooksTemplate(index);
        
        renderComments(index);

    }
}

function renderComments(index) {
    const bookCommentRef = document.getElementById(`comment_section_${index}`);
    bookCommentRef.innerHTML = "";

    for (let commentIndex = 0; commentIndex < bookList[index].comments.length; commentIndex++) {
        bookCommentRef.innerHTML += getCommentsTemplate(index, commentIndex);
    }
}






// To do:

// Comments in eigener Schleife auslesen und anzeigen
// Kommentar-Funktion: Text aus Input auslesen, array hinzufügen und anzeigen
// Like-Funktion: Onclick Button Bild Ändern + Likes +1/-1
// Preis auslesen & mit , anzeigen

// Bonus: Local Storage
// Bonus: Favoriten markieren & anzeigen lassen
