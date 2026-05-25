function getBooksTemplate(index){
    return /*html*/`
        
        <article class="book_card">
            <header class="book_header">
                <div class="book_title"><h2 id="book_title">${bookList[index].name}</h2></div>
                <div class="book_header_cover"><img src="./assets/icons/book_icon.svg" alt="Book cover"></div>
            </header>
            <section class="book_body">
                <div class="book_body_price">
                    <p id="book_price">${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(bookList[index].price)}</p>
                    <div class="book_likes">
                        <p id="book_likes_${index}">${bookList[index].likes}</p>
                        <button onclick="changeLikeCounter(${index})" id="like_button" class="like_button"><img id="like_img_${index}" src="./assets/icons/like_outline.svg" alt="like icon"></button>
                    </div>
                </div>
                <table class="book_table">
                    <tr>
                        <th>Autor</th>
                        <td id="author">${bookList[index].author}</td>
                    </tr>
                    <tr>
                        <th>Erscheinungsjahr</th>
                        <td id="publication_date">${bookList[index].publishedYear}</td>
                    </tr>
                    <tr>
                        <th>Genre</th>
                        <td id="genre">${bookList[index].genre}</td>
                    </tr>
                </table>
            </section>
            <section class="book_comment_section">
                <h3>Kommentare:</h3>
                <div class="comment_wrapper"><table id="comment_section_${index}" class="book_table">
                </table></div>
            </section>
            <footer class="book_footer">
                <input id="comment_input_${index}" type="text" class="comment_input" placeholder="Schreibe einen Kommentar ...">
                <button onclick="addComment(${index})" class="comment_button"><img src="./assets/icons/send_icon.png" alt="send_icon"></button>
            </footer>
        </article>
    `
}

function getCommentsTemplate(index, commentIndex){
    return /*html*/ `
            <tr>
                <th>[${bookList[index].comments[commentIndex].name}]</th>
                <td id="book_comments">${bookList[index].comments[commentIndex].comment}</td>
            </tr>   
    `

}