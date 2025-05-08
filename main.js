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
