
// --------------- form -------------------

const addBtn = document.querySelector(".add-book-btn");
const form = document.querySelector('.form-wrapper');
addBtn.addEventListener('click', showForm);
form.addEventListener('click', closeForm);
document.addEventListener('keydown', closeForm)

function showForm() {
    form.style.display = 'flex';
}

function closeForm(e) {
    if (this !== e.target && e.key !== 'Escape') return;
    if (form.style.display === "flex") form.style.display = 'none';
}

// -----------------------------------------

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
}


function addBookToLibrary() {

}


// let myBook = new Book('titl', 'auth', 7, 'read');
// let myBook2 = new Book('titl2', 'auth2', 9, 'not read yet');

// console.log(myBook.info());
// console.log(myBook2.info());
// console.log(myBook.info());