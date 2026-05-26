
function init() {
    renderBooks();
}

function renderBooks() {
    const bookListRef = document.getElementById("book_shelf");
    bookListRef.innerHTML = "";

    for (let index = 0; index < bookList.length; index++) {
        getLikes(index);                                      // first, because liked true/false is needed for img rendering in template
        bookListRef.innerHTML += getBooksTemplate(index);   
        renderLikeImg(index);                                   // add like count, incl. data from local storage   
        renderComments(index);                                // add comments, incl. data from local storage
    }
}

function renderFavBooks(){
    const bookListRef = document.getElementById("book_shelf");
    bookListRef.innerHTML = "";

    for (let index = 0; index < bookList.length; index++) {
        getLikes(index);                                        // first, because liked true/false is needed for img & if query
        if(bookList[index].liked === true){                     // renders only liked=true books
        bookListRef.innerHTML += getBooksTemplate(index);
        renderComments(index);
        renderLikeImg(index);
        }
    }
  
}

function renderComments(index) {
    const bookCommentRef = document.getElementById(`comment_section_${index}`);
    bookCommentRef.innerHTML = "";
    getComments(index);                                         // gets data from local storage

    for (let commentIndex = 0; commentIndex < bookList[index].comments.length; commentIndex++) {  
        bookCommentRef.innerHTML += getCommentsTemplate(index, commentIndex);
    }
}

function renderLikeImg(index) {                                               // switches img for liked = true/false
    const likeRef = document.getElementById(`like_img_${index}`);
    const bookLikeRef = document.getElementById(`book_likes_${index}`);
    bookLikeRef.innerText = bookList[index].likes;                           // gets data (Number of likes) from array

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
        bookList[index].comments.push({                     // adds name and comment to comments array
            "name": "Hoid",
            "comment": commentInputRef.value,
        });
        safeComments(index);
        renderComments(index);
        commentInputRef.value = "";
    }
}

function changeLikeCounter(index) {                             // adds +1 to likes or resets it
    bookList[index].liked = !bookList[index].liked;             // switches the boolean of liked from false to true & reverse

    if (bookList[index].liked == true) {
        bookList[index].likes++;
    }
    else {
        bookList[index].likes--;
    }
    renderLikeImg(index);                                      // sets like img according to boolean status
    safeLikes(index);
}


function safeComments(index) {
    localStorage.setItem(`bookList${index}.comments`, JSON.stringify(bookList[index].comments));
}

function safeLikes(index) {                                 // safes like counter & liked status (boolean) to local storage
    localStorage.setItem(`bookList${index}.likes`, JSON.stringify(bookList[index].likes));
    localStorage.setItem(`bookList${index}.liked`, JSON.stringify(bookList[index].liked)); 
}


function getComments(index) {                               // updates comments array with data from local storage, if available
    let safedComments = JSON.parse(localStorage.getItem(`bookList${index}.comments`))
    if (safedComments != null) {
        bookList[index].comments = safedComments;       
    }
}

function getLikes(index) {                            // updates like count and liked status (boolean) from local storage, if available
    let safedLikesCount = localStorage.getItem(`bookList${index}.likes`);
    let safedLiked = localStorage.getItem(`bookList${index}.liked`);
    if (safedLikesCount != null) {
        bookList[index].likes = JSON.parse(safedLikesCount);        // updates like count
    }

    if (safedLiked != null) {
        bookList[index].liked = JSON.parse(safedLiked);             // updates liked status

    }
}




// To do:


// Code kommentieren, überprüfen & säubern
// Loom für Abgabe erstellen





