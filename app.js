// ----------------- Book -------------------

function Book(title, author, pages, read=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.heart = false;
    this.addBookToDOM();
}
// Book.myLibrary = [];
// Book.addBookToLibrary = function(book) {
//     this.myLibrary.push(book);
// }
// Book.getBooks = function() {
//     return this.myLibrary;
// }

Book.prototype.addBookToDOM = function() {
    this.bookDiv = Book.createElem('div', 'book')
    let info = Book.createElem('div', 'book-info');
    info.appendChild(Book.createElem('p', 'b-title', this.title));
    info.appendChild(Book.createElem('p', 'b-author', `By ${this.author}`));
    info.appendChild(Book.createElem('p', 'b-pages', `${this.pages} pages`));

    let btns = Book.createElem('div', 'book-btns');
    this.readDiv = Book.createElem('button', 'b-read icon-ok');
    this.heartDiv = Book.createElem('button', 'b-love icon-heart');
    this.removeDiv = Book.createElem('button', 'b-remove icon-cancel');
    if (this.read) {
        this.readDiv.classList.add('selected');
    }
    btns.appendChild(this.readDiv);
    btns.appendChild(this.heartDiv);
    btns.appendChild(this.removeDiv);

    this.bookDiv.appendChild(info);
    this.bookDiv.appendChild(btns);
    document.querySelector(".books").appendChild(this.bookDiv);
    Book.addListeners(this);
}


Book.createElem = function(type, cls, value=null) {
    let elem = document.createElement(`${type}`);
    elem.setAttribute('class', `${cls}`);
    if (value) {
        elem.textContent = value;
    }
    return elem;
}

Book.toggleBtn = function(prop, e){
    if (this[`${prop}`]) {
        this[`${prop}`] = false;
    } else {
        this[`${prop}`] = true;
    }
    e.target.classList.toggle('selected');
}


Book.addListeners = function(book) {
    let readHandler = Book.toggleBtn.bind(book, 'read');
    book.readDiv.addEventListener('click', readHandler);

    let heartHandler = Book.toggleBtn.bind(book, 'heart');
    book.heartDiv.addEventListener('click', heartHandler);

    book.removeDiv.addEventListener('click', () => {
        document.querySelector(".books").removeChild(book.bookDiv);
    });
}

// --------------- Form -------------------

const addBtn = document.querySelector(".add-book-btn");
const formWrapper = document.querySelector('.form-wrapper');

addBtn.addEventListener('click', showForm);
formWrapper.addEventListener('click', closeForm);
document.addEventListener('keydown', closeForm);

function showForm() {
    formWrapper.style.display = 'flex';
}

function closeForm(e) {
    if (this !== e.target && e.key !== 'Escape') return;
    if (formWrapper.style.display === "flex") formWrapper.style.display = 'none';
}

// --------------- input -------------------

const submitBtn = document.getElementById('submit');
const bookForm = document.getElementById('book-form');

submitBtn.addEventListener('click', (e) => {
    form = bookForm.elements;
    if (form['title'].value && form['author'].value && !isNaN(form['page-num'].value)) {
        let book = new Book(form['title'].value, form['author'].value, form['page-num'].value, form['read'].checked);
        if (formWrapper.style.display === "flex") formWrapper.style.display = 'none';
        e.preventDefault();
        bookForm.reset();
    }
    // Book.addBookToLibrary(book);
})



let b3 = new Book('Title', 'Author', 107, true);
let b4 = new Book('This book has a really realy really realy really really realy long title', 'Author', 1000, true);
let b5 = new Book('Title title title tiiiitle', 'Author', 107, false);
let b6 = new Book('Title', 'Author', 107, false);
let b8 = new Book('This book has a really looooooooooooooooooooooooooong title', 'Author Author Author', 1, false);
let b11 = new Book('Title', 'Author', 107, true);
