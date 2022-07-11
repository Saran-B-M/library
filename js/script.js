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
    
    let cards = document.querySelector('.cards');
    let addBookButton = document.querySelector('button');
    let titleField = document.querySelector('#title');
    let authorField = document.querySelector('#author');
    let pagesField = document.querySelector('#pages');
    let add = document.querySelector('#add');

    (function addEventListeners(){
        addBookButton.addEventListener('click', addBook);
    })();

    function addBook(events, defaultBook=''){
            
            if(!defaultBook){
                let newBook;
                newBook = new Book;
                newBook.title = titleField.value;
                newBook.author = authorField.value;
                newBook.pages = pagesField.value;
                Library.addBook(newBook);

                let card = createCard(newBook);
                cards.appendChild(card);
            }
           
            Library.addBook(defaultBook);

            let card = createCard(defaultBook);
            cards.appendChild(card);
        
        
        
    }


    function createCard(book){
        let card = document.createElement('div');
        card.classList.add('card');
        card.classList.add(book.title);
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
        
        return card;
        }

    function showBooks(){

    }


    function markBookRead(e){
        let title = e.target.getAttribute("data-title")
        let markedBook = cards.querySelector(`.${title}>p`);
        Library.markBookRead(title);
        markedBook.textContent = 'Read'
        showBooks();
    
    }

    function removeBook(e){
        let title = e.target.getAttribute("data-title")
        let removedBook = cards.querySelector(`.${title}`);
        Library.removeBook(title);
        cards.removeChild(removedBook);
        showBooks();
        
    
}
    return {addBook}
})();

let b1 = new Book('ycw', 'askdfj', 123);
let b2 = new Book('ikigai', 'askdfj', 123);
let b3 = new Book('masth', 'askdfj', 123);

DisplayController.addBook('', b1);
DisplayController.addBook('', b2);
DisplayController.addBook('', b3);





