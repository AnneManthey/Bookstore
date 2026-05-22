
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
    getFromLocalStorage(index);

    for (let commentIndex = 0; commentIndex < bookList[index].comments.length; commentIndex++) {
        bookCommentRef.innerHTML += getCommentsTemplate(index, commentIndex);
    }
}

function addComment(index){
    const commentInputRef = document.getElementById(`comment_input_${index}`)  
        if (commentInputRef.value != ""){
            bookList[index].comments.push({
                "name": "Hoid",
                "comment": commentInputRef.value,
            });
            safeToLocalStorage(index)
            renderComments(index);
            commentInputRef.value = "";
        }

}

function switchLike(index){
    const likeRef = document.getElementById(`like_img_${index}`);
    let likeCounterRef = document.getElementById(`book_likes_${index}`);
    
    if(likeRef.src.includes("like_outline.svg")){
        likeRef.src = "./assets/icons/like_filled.svg"
        bookList[index].likes++;
        let likeCounter = document.getElementById(`book_likes_${index}`);
        likeCounterRef.innerText = bookList[index].likes;

    }
    else {
        likeRef.src = "./assets/icons/like_outline.svg";
        bookList[index].likes--;
        let likeCounter = document.getElementById(`book_likes_${index}`);
        likeCounterRef.innerText = bookList[index].likes;
    }
}

function safeData(index){

    safeToLocalStorage(index);
}

function safeToLocalStorage(index){
    localStorage.setItem("bookList.comments", JSON.stringify(bookList[index].comments));

}

function getFromLocalStorage(index){
    let safedComments = JSON.parse(localStorage.getItem(bookList[index].comments))
    if (safedComments != null){
        bookList[index].comments = safedComments;
    }
}



// To do:
// Responsive anpassen
// Code kommentieren, überprüfen & säubern
// Loom für Abgabe erstellen


// Bonus: Local Storage safe/load implementieren
// Bonus: Favoriten markieren & anzeigen lassen
        //Buttons für Favoriten erstellen
