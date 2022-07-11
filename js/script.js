//Create a module called library that stores the books, functions to add/remove
//and mark read a book
class Book {
    constructor(title, author, pages, read=false){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        
    }

    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }

}

const Library = (function(){
    let _shelf = [];

    const addBook = function (book){
        if(book instanceof Book) _shelf.push(book);
    }

    const markBookRead = function (title){
        for(let book of _shelf){
            if(book.title == title){
                book.read =1;
            }
        }
    }

    const getShelf = () => _shelf;

    const removeBook = function (title){
        for(let book of _shelf){
            if(book.title == title){
                let index = _shelf.indexOf(book);
                _shelf.splice(index, 1);
            }
        }
    }

    return {getShelf, addBook, markBookRead, removeBook};

})()

const DisplayController = (function() {
    
    let body = document.querySelector('body');
    let cards = document.querySelector('.cards');
    let addBookButton = document.querySelector('button');

    function addEventListeners(){
        addBookButton.addEventListener('click', addBook);
    }

    function addBook(){
        let newBook = new Book;
        newBook.title = prompt("Title");
        newBook.author = prompt("author");
        newBook.pages = prompt("pages");

        Library.addBook(newBook);

        showBooks();
    }

    function showBooks(){
        if(cards) body.removeChild(cards);
        cards = document.createElement('div');
        cards.classList.add('cards');
        for (let book of Library.getShelf()){
            let card = document.createElement('div');
            card.classList.add('card');
            let title = document.createElement('h1');
            let author = document.createElement('h3');
            let pages = document.createElement('h3');
            let read = document.createElement('p');
    
            let removeBookButton = document.createElement('button');
            removeBookButton.textContent = "Remove";
            removeBookButton.classList.add('removeBook');
            removeBookButton.setAttribute("data-title", book.title);
            removeBookButton.addEventListener('click', removeBook)
    
            let markReadButton = document.createElement('button');
            markReadButton.classList.add('markRead');
            markReadButton.setAttribute("data-title", book.title);
            markReadButton.textContent = "Read";
            markReadButton.addEventListener('click', markBookRead);
            
            title.textContent = book.title;
            author.textContent = book.author;
            pages.textContent = book.pages;
            read.textContent = book.read?'Read':'Not Read Yet';
            
            card.appendChild(title);
            card.appendChild(author);
            card.appendChild(pages);
            card.appendChild(read);
            card.appendChild(removeBookButton);
            card.appendChild(markReadButton);
            cards.appendChild(card);
        }
        
        body.appendChild(cards);
        addEventListeners();
    }

    function markBookRead(e){
        let title = e.target.getAttribute("data-title");
        Library.markBookRead(title);
        showBooks();
    
    }

    function removeBook(e){
    
        let title = e.target.getAttribute("data-title");
        Library.removeBook(title);
        showBooks();
        
    
}
    return {showBooks}
})();

let b1 = new Book('ycw', 'askdfj', 123);
let b2 = new Book('ikigai', 'askdfj', 123);
let b3 = new Book('masth', 'askdfj', 123);

Library.addBook(b1);
Library.addBook(b2);
Library.addBook(b3);


DisplayController.showBooks();




