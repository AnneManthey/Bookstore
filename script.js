
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

function addComment(index){
    const commentInputRef = document.getElementById(`comment_input_${index}`)  
    let commentInput = commentInputRef.value;
        if (commentInputRef.value != ""){
            bookList[index].comments.push = ({
                "name": "anonym",
                "comment": commentInput.value,
            });
            console.log(bookList[index].comments[0].name);
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





// To do:


// Kommentar-Funktion: Text aus Input auslesen, array hinzufügen und anzeigen
// Preis mit , anzeigen



// Bonus: Local Storage
// Bonus: Favoriten markieren & anzeigen lassen
