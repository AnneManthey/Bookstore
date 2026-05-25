
function init() {
    renderBooks();
}

function renderBooks() {
    const bookListRef = document.getElementById("book_shelf");
    bookListRef.innerHTML = "";

    for (let index = 0; index < bookList.length; index++) {
        getLikes(index);
        bookListRef.innerHTML += getBooksTemplate(index);
        renderComments(index);
    }
    for (let index = 0; index < bookList.length; index++) {
        renderLikes(index);
    };
}


function renderComments(index) {
    const bookCommentRef = document.getElementById(`comment_section_${index}`);
    bookCommentRef.innerHTML = "";
    getComments(index);

    for (let commentIndex = 0; commentIndex < bookList[index].comments.length; commentIndex++) {
        bookCommentRef.innerHTML += getCommentsTemplate(index, commentIndex);
    }
}

function renderLikes(index) {
    const likeRef = document.getElementById(`like_img_${index}`);
    const bookLikeRef = document.getElementById(`book_likes_${index}`);

    bookLikeRef.innerText = bookList[index].likes;

    if (bookList[index].liked === false) {
        likeRef.src = "./assets/icons/like_outline.svg";
    }
    else {
        likeRef.src = "./assets/icons/like_filled.svg"
    }
}


function addComment(index) {
    const commentInputRef = document.getElementById(`comment_input_${index}`)
    if (commentInputRef.value != "") {
        bookList[index].comments.push({
            "name": "Hoid",
            "comment": commentInputRef.value,
        });
        safeComments(index);
        renderComments(index);
        commentInputRef.value = "";
    }

}

function changeLikeCounter(index) {                             // Likes-Zähler + bzw. -
    bookList[index].liked = !bookList[index].liked;

    if (bookList[index].liked == true) {
        bookList[index].likes++;
    }
    else {
        bookList[index].likes--;
    }
    renderLikes(index);
    safeLikes(index);
}


function safeComments(index) {
    localStorage.setItem(`bookList${index}.comments`, JSON.stringify(bookList[index].comments));
}

function safeLikes(index) {
    localStorage.setItem(`bookList${index}.likes`, JSON.stringify(bookList[index].likes));
    localStorage.setItem(`bookList${index}.liked`, JSON.stringify(bookList[index].liked)); 
}


function getComments(index) {
    let safedComments = JSON.parse(localStorage.getItem(`bookList${index}.comments`))
    if (safedComments != null) {
        bookList[index].comments = safedComments;
    }
}

function getLikes(index) {
    let safedLikesCount = localStorage.getItem(`bookList${index}.likes`);
    let safedLiked = localStorage.getItem(`bookList${index}.likes`);
    if (safedLikesCount != null) {
        bookList[index].likes = JSON.parse(safedLikesCount);
    }

    if (safedLiked != null) {
        bookList[index].liked = JSON.parse(safedLiked);

    }
}

//let safedLikesCount = JSON.parse(localStorage.getItem(`bookList${index}.likes`));


// To do:
// Responsive anpassen
// Code kommentieren, überprüfen & säubern
// Loom für Abgabe erstellen


// Bonus: Local Storage safe/load implementieren
// Bonus: Favoriten markieren & anzeigen lassen (über ID hinzufügen bei like o.ä.?)
//Buttons für Favoriten erstellen
