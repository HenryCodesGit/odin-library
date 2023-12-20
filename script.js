let myLibrary = [];

//Setting up variable for the add button
const ADD_BOOK = document.querySelector('#add');
ADD_BOOK.addEventListener('click', ()=>{
    alert('hi');
});

//Getting HTML template element to populate more book rows
let _ = document.querySelector('.book-template');
//_.parentNode.removeChild(_);
const BOOK_TEMPLATE = _.cloneNode(true);

//Need reference to the library table itself so it can add more rows
const BOOK_SHELF = document.querySelector('.shelf > tbody');

function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = (hasRead == null || hasRead == undefined) ? false : true;
}

function addBookToLibrary(book){

    //Keep track of date item was put in library
    const TIME = Date.now();

    //Populate the array
    myLibrary.push({
        timeStamp: TIME,
        book: book
    });

    //Make element to put on page
    let bookElement = BOOK_TEMPLATE.cloneNode(true);

    //Need to change the template class to the book class so its not hidden
    bookElement.setAttribute('class','book');

    //Change the book details for the HTML element
    bookElement.querySelector('.title').textContent = book.title;
    bookElement.querySelector('.author').textContent = book.author;
    bookElement.querySelector('.pages').textContent = book.pages;
    bookElement.querySelector('.has-read').textContent = Boolean(book.hasRead);

    //Set up 'delete' button so that it can delete the book
    bookElement.querySelector('.delete').addEventListener('click', () => {
        bookElement.remove()
        myLibrary = myLibrary.filter(book => book.timeStamp == TIME);
    });

    //Set up the 'read' button so it can update the status of the book
    bookElement.querySelector('.read').addEventListener('click', () =>{

        let bookIndex = myLibrary.findIndex((book)=> book.timeStamp==TIME);

        //Toggle the status
        myLibrary[bookIndex].book.hasRead = !myLibrary[bookIndex].book.hasRead;

        //Update the HTML element
        bookElement.querySelector('.has-read').textContent = myLibrary[bookIndex].book.hasRead;
        
    });

    BOOK_SHELF.appendChild(bookElement);
}

function logBooks(){
    myLibrary.forEach( (book) => {
        console.log(book.title + "|" + book.author + "|" + book.pages + "|" + book.hasRead);
    });
}


setTimeout(function(){addBookToLibrary(new Book('a','b','3',false));}, 10);
setTimeout(function(){addBookToLibrary(new Book('a','b','3',false));}, 10);
setTimeout(function(){addBookToLibrary(new Book('a','b','3',false));}, 10);
setTimeout(function(){addBookToLibrary(new Book('a','b','3',false));}, 10);
setTimeout(function(){addBookToLibrary(new Book('a','b','3',false));}, 10);
    



