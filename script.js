function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

book.prototype.info = function () {
  return `${title} by ${author}, ${pages} pages, ${read}`;
};

let myLibrary = [];

// addBookToLibrary(
//   "best book in the world part 2",
//   "Nick van Ekeren",
//   "69",
//   "Yes"
// );

// addBookToLibrary("best book in the world", "Nick van Ekeren", "69", "Yes");

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.querySelector("input[name='read']").value;
  myLibrary.push(new book(title, author, pages, read));
  loop();
}

const bookshowcase = document.querySelector(".bookshowcase");

function loop() {
  for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement("div");
    bookshowcase.appendChild(book);
    book.classList.add("book");
    const name = document.createElement("div");
    book.appendChild(name);
    const author = document.createElement("div");
    book.appendChild(author);
    const pages = document.createElement("div");
    book.appendChild(pages);
    const read = document.createElement("div");
    book.appendChild(read);
    name.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    pages.textContent = `${myLibrary[i].pages} pages`;
    read.textContent = `Read: ${myLibrary[i].read}`;
  }
}
const submit = document.querySelector(".submit-button");
submit.addEventListener("click", addBookToLibrary);
// submit.onclick = addBookToLibrary();

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
