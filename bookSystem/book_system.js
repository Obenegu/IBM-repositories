let books = [];

function addBook() {
const name = document.getElementById('bookName').value;
const author = document.getElementById('authorName').value;
const description = document.getElementById('bookDescription').value;
const pages = document.getElementById('pagesNumber').value;
 if(name && author && description && !isNaN(pages)) {
    const book = {
        name: name,
        author: author,
        description: description,
        pageNumber: pages
    }

    books.push(book);
    showBook();
    clearInput();
 } else {
    alert("Please fill in all the fields correctly");
 }
}

function showBook() {
    const bookDiv = books.map((book, index) => {
        return `<h1>Book Number ${index + 1}</h1>
        <p><strong>Book Name : </strong>${book.name}</p>
        <p><strong>Author Name : </strong>${book.author}</p>
        <p><strong>Book Description : </strong>${book.description}</p>
        <p><strong>No of Pages : </strong>${book.pageNumber}</p>
        `
    });
    document.getElementById('books').innerHTML = bookDiv; 
}

function clearInput() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
function filterBooks() {
    const pageFilter = books.filter(item => {
        if(item.pageNumber === 200) {
            return item;        }
    })

    const filtered = pageFilter.map(items => {
        return `<p>${items.name}</p>`
    }).join("");
}