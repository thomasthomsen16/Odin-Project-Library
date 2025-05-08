const myLibrary = [];

function Book(author,title,pages,read){
    this.ID = crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(author,title,pages,read){
    const book = new Book(author,title,pages,read);
    myLibrary.push(book);
    return book;
}
