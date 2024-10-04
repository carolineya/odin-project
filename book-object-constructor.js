function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`)
    }
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "read")

book1.info()