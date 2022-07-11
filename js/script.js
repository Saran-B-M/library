//Create a module called library that stores the books, functions to add/remove
//and mark read a book
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

    const get_Shelf = () => _shelf;

    const removeBook = function (title){
        for(let book of _shelf){
            if(book.title == title){
                let index = _shelf.indexOf(book);
                _shelf.splice(index, 1);
            }
        }
    }

    return {addBook, markBookRead, removeBook};

})()

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





let b1 = new Book('ycw', 'askdfj', 123, 0);
let b2 = new Book('ikigai', 'askdfj', 123, 0);
let b3 = new Book('masth', 'askdfj', 123, 0);



Library.addBook(b1);
Library.addBook(b2);
Library.addBook(b3);



// const displayController = (function {

//     function showBooks(){
//         let body = document.querySelector('body');
//         let cards = document.querySelector('.cards')
//         if(cards) body.removeChild(cards);
//         cards = document.createElement('div');
//         cards.classList.add('cards');
//         for (let book of myLibrary){
//             let card = document.createElement('div');
//             card.classList.add('card');
//             let title = document.createElement('h1');
//             let author = document.createElement('h3');
//             let pages = document.createElement('h3');
//             let read = document.createElement('p');
    
//             let removeBook = document.createElement('button');
//             removeBook.textContent = "Remove";
//             removeBook.classList.add('removeBook');
//             removeBook.setAttribute("data-title", book.title);
//             removeBook.addEventListener('click', removeTheBook)
    
//             let markRead = document.createElement('button');
//             markRead.classList.add('markRead');
//             markRead.setAttribute("data-title", book.title);
//             markRead.textContent = "Read";
//             markRead.addEventListener('click', markBookRead);
            
//             title.textContent = book.title;
//             author.textContent = book.author;
//             pages.textContent = book.pages;
//             read.textContent = book.read?'Read':'Not Read Yet';
            
//             card.appendChild(title);
//             card.appendChild(author);
//             card.appendChild(pages);
//             card.appendChild(read);
//             card.appendChild(removeBook);
//             card.appendChild(markRead);
//             cards.appendChild(card);
//         }
        
//         body.appendChild(cards);
//     }

//     function markBookRead(e){
//         let title = e.target.getAttribute("data-title");
//         Library.markBookRead(title);
//         showBooks();
    
//     }

//     function removeTheBook(e){
    
//         let title = e.target.getAttribute("data-title");
//         Library.removeBook(title);
//         showBooks();
        
    
// }

// })()








// showBooks();



// let addBook = document.querySelector('button');
// addBook.addEventListener('click', ()=>{
//     let newBook = new Book;
//     newBook.title = prompt("Title");
//     newBook.author = prompt("author");
//     newBook.pages = prompt("pages");

//     addBookToLibrary(newBook);
    
//     showBooks();
    
// })

