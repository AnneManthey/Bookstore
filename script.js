
function init(){
    renderBooks();
}

function renderBooks(){
    let bookRef = document.getElementById("book_shelf");
    bookRef.innerHTML = "";
    bookRef.innerHTML += getBooksTemplate();
}


// Variablen in html template
// for-loop anlegen & JSON rendern lassen
// Like-Funktion: Onclick Button Bild Ändern + Likes +1/-1
// Kommentar-Funktion: Text aus Input auslesen und als Kommentar hinzufügen

// Bonus: Local Storage
// Bonus: Favoriten markieren & anzeigen lassen

// Optional: Buch im Dialog-Fenster öffnen lassen
// 