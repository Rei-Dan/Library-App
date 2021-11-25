// ##Book Constructor
function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
// ##Added a function to the prototype to share between all objects created from the books constructor
book.prototype.info = function () {
  console.log(
    `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
  );
};

// ##Declare empty library
let myLibrary = [];
// {
//   title: "best book in the world part 2",
//   author: "Jiminy Cricket",
//   pages: "69",
//   read: "Read",
// },
// ##Select all buttons on the pages that have the class of .delete-button
let deletebuttons = document.querySelectorAll(".delete-button");

// function to grab all the values from the input fields, pushes these as
// an object to the myLibrary Array and invokes the addbook() function
function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.querySelector("input[name='read']:checked").value;
  myLibrary.push(new book(title, author, pages, read));
  addbook();
}

// function deletebook() {
//   const booktarget = deletebutton.closest(".book");
// }

function addDeletefunction() {
  deletebuttons = document.querySelectorAll(".delete-button");
  deletebuttons.forEach((deletebutton) => {
    deletebutton.addEventListener("click", () => {
      const booktarget = deletebutton.parentNode.parentNode;
      // const booktarget = deletebutton.closest("[data-book-number]");
      // console.log(booktarget);
      // console.log(booktarget.dataset.bookNumber);
      myLibrary.splice(booktarget.dataset.bookNumber - 1, 1);
      bookshowcase.removeChild(booktarget);
      reorderBooks(booktarget.dataset.bookNumber);
    });
  });
}

function reorderBooks(booktarget) {
  const books = bookshowcase.querySelectorAll(".book");
  books.forEach((book) => {
    if (book.dataset.bookNumber > booktarget) {
      book.dataset.bookNumber -= 1;
    }
  });
}

const bookshowcase = document.querySelector(".bookshowcase");

function addbook() {
  const book = document.createElement("div");
  // book.id = `${myLibrary.length}`;
  bookshowcase.appendChild(book);
  book.classList.add("book");
  book.dataset.bookNumber = myLibrary.length;
  const bookheader = document.createElement("div");
  book.appendChild(bookheader);
  bookheader.classList.add("bookheader");
  const deletebutton = document.createElement("button");
  deletebutton.innerHTML = "&times";
  deletebutton.classList.add("delete-button");
  bookheader.appendChild(deletebutton);
  const name = document.createElement("div");
  book.appendChild(name);
  name.classList.add("name");
  const author = document.createElement("div");
  book.appendChild(author);
  const pages = document.createElement("div");
  book.appendChild(pages);
  const read = document.createElement("div");
  book.appendChild(read);
  name.textContent = myLibrary[myLibrary.length - 1].title;
  author.textContent = myLibrary[myLibrary.length - 1].author;
  pages.textContent = `${myLibrary[myLibrary.length - 1].pages} pages`;
  read.textContent = `Read: ${myLibrary[myLibrary.length - 1].read}`;
  addDeletefunction();
}
// addbook();

const submit = document.querySelector(".submit-button");
submit.addEventListener("click", addBookToLibrary);

// ## MODAL OPEN AND CLOSING WITH OVERLAY ##

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

const overlay = document.getElementById("overlay");
const closeModalButtons = document.querySelectorAll("[data-modal-close]");
const openModalButtons = document.querySelectorAll("[data-modal-target]");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});
