// Book constructor function
function Book(title, author) {
    this.title = title;
    this.author = author;
    this.available = true;
  }
  
  // Library constructor function
  function Library() {
    this.books = [];
  }
  
  // Function to add books to the library
  Library.prototype.addBook = function (book) {
    this.books.push(book);
  };
  
  // Function to display the list of available books
  Library.prototype.displayAvailableBooks = function () {
    console.log('Available Books:');
    this.books.forEach((book) => {
      if (book.available) {
        console.log(`${book.title} by ${book.author}`);
      }
    });
  };
  
  // Function for users to borrow books
  Library.prototype.borrowBook = function (title) {
    const book = this.findBook(title);
  
    if (book) {
      if (book.available) {
        book.available = false;
        console.log(`You have successfully borrowed "${book.title}" by ${book.author}.`);
      } else {
        console.log(`Sorry, "${book.title}" is not available for borrowing.`);
      }
    } else {
      console.log(`Book with title "${title}" not found in the library.`);
    }
  };
  
  // Function for users to return books
  Library.prototype.returnBook = function (title) {
    const book = this.findBook(title);
  
    if (book) {
      if (!book.available) {
        book.available = true;
        console.log(`You have successfully returned "${book.title}" by ${book.author}.`);
      } else {
        console.log(`"${book.title}" is already available in the library.`);
      }
    } else {
      console.log(`Book with title "${title}" not found in the library.`);
    }
  };
  
  // Helper function to find a book by title
  Library.prototype.findBook = function (title) {
    return this.books.find((book) => book.title.toLowerCase() === title.toLowerCase());
  };
  
  // Example usage:
  const library = new Library();
  
  const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald');
  const book2 = new Book('To Kill a Mockingbird', 'Harper Lee');
  const book3 = new Book('1984', 'George Orwell');
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  library.displayAvailableBooks();
  
  library.borrowBook('The Great Gatsby');
  library.borrowBook('To Kill a Mockingbird');
  
  library.displayAvailableBooks();
  
  library.returnBook('The Great Gatsby');
  library.returnBook('To Kill a Mockingbird');
  
  library.displayAvailableBooks();
  