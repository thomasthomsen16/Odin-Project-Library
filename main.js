const myLibrary = [];

function Book(author,title,pages,read){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
      }
    this.ID = crypto.randomUUID();
    this.author = String(author).trim();
    this.title = String(title);
    this.pages = Number(pages);
    this.read = Boolean(read);
};

function addBookToLibrary(author,title,pages,read){
    const book = new Book(author,title,pages,read);
    myLibrary.push(book);
    return book;
}

function displayBooks() {
    const bookTable = document.querySelector("#libraryTable tbody")
    //Clear existing rows
    bookTable.innerHTML=""; 
    // Get all avaible keys from book object
    const keys = Object.keys(myLibrary[0]);

    myLibrary.forEach((book) => {
        const row = document.createElement("tr")
        keys.forEach((key) => {
            const cell = document.createElement("td")
            cell.textContent =book[key];
            row.appendChild(cell)
        });
        bookTable.appendChild(row);
    });
}

// Open modal
document.getElementById("addBook").addEventListener("click", () => {
    const dialog = document.getElementById("dialog");
    dialog.showModal();
});

//Close modal
document.getElementById("cancelDialog").addEventListener("click", () => {
    const dialog = document.getElementById("dialog");
    dialog.close();
});


document.getElementById("bookForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from submitting to a server

    const form = e.target;
    const author = form.author.value;
    const title = form.title.value;
    const pages = form.pages.value;
    const read = form.read.checked;

    addBookToLibrary(author, title, pages, read);
    displayBooks();

    form.reset(); // Clear form inputs
    dialog.close();
});

book1=addBookToLibrary("ksdfh", "sldfjksdf",39,false)
book2=addBookToLibrary("haha", "yaya",45,true)

displayBooks()