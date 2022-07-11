let myLibrary = [];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = () => `${this.title} by ${this.author}, ${this.pages} pages`
}

function addBookToLibrary(book){
    if(book instanceof Book) myLibrary.push(book);
}

let b1 = new Book('saldkf', 'askdfj', 123, 0);
let b2 = new Book('asdfagg', 'askdfj', 123, 0);
let b3 = new Book('ssssss', 'askdfj', 123, 0);



addBookToLibrary(b1);
addBookToLibrary(b2);
addBookToLibrary(b3);


function showBooks(){
    let body = document.querySelector('body');
    let cards = document.querySelector('.cards')
    if(cards) body.removeChild(cards);
    cards = document.createElement('div');
    cards.classList.add('cards');
    for (let book of myLibrary){
        let card = document.createElement('div');
        card.classList.add('card');
        let title = document.createElement('h1');
        let author = document.createElement('h3');
        let pages = document.createElement('h3');
        let read = document.createElement('p');

        let removeBook = document.createElement('button');
        removeBook.textContent = "Remove";
        removeBook.classList.add('removeBook');
        removeBook.setAttribute("data-title", book.title);
        removeBook.addEventListener('click', removeTheBook)

        let markRead = document.createElement('button');
        markRead.classList.add('markRead');
        markRead.setAttribute("data-title", book.title);
        markRead.textContent = "Read";
        markRead.addEventListener('click', markBookRead);
        
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.textContent = book.read?'Read':'Not Read Yet';
        
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(removeBook);
        card.appendChild(markRead);
        cards.appendChild(card);
    }
    
    body.appendChild(cards);
}

function markBookRead(e){
    let title = e.target.getAttribute("data-title");
    for(book of myLibrary){
        if(book.title == title){
            book.read =1;

        }
    }
    showBooks();

}

function removeTheBook(e){
    
        let title = e.target.getAttribute("data-title");
        for(book of myLibrary){
            if(book.title == title){
                let index = myLibrary.indexOf(book);
                myLibrary.splice(index, 1);
    
            }
        }
        showBooks();
        
    
}


showBooks();



let addBook = document.querySelector('button');
addBook.addEventListener('click', ()=>{
    let newBook = new Book;
    newBook.title = prompt("Title");
    newBook.author = prompt("author");
    newBook.pages = prompt("pages");

    addBookToLibrary(newBook);
    
    showBooks();
    
})

