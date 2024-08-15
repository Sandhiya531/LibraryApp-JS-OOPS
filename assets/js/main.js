const formEl = document.querySelector('form');

const lib = new Library()

formEl.addEventListener('submit',(event)=>{
    event.preventDefault();

    const bookTitle = document.getElementById('bookTitle').value.trim()
    const bookAuthor = document.getElementById('bookAuthor').value.trim()

    if(bookTitle && bookAuthor){
        const addedBook = new Book(bookTitle, bookAuthor)

        //Add book to library class
        lib.addBook(addedBook)

        renderLibrary()

        // remove the entered book information
        document.getElementById('bookTitle').value = ''
        document.getElementById('bookAuthor').value = ''
    }

})

function markBookAsRead(index){
    lib.getBook()[index].markAsRead()
    renderLibrary()
}

function removeBook(index){
    lib.removeBook(index)
    renderLibrary()
}

function renderLibrary(){
    const renderLibEl = document.querySelector('#renderedLibrary');
    const bookCountEl = document.querySelector('#bookCount');
    bookCountEl.textContent = lib.bookCount()

    //Re-setting previous value
    renderLibEl.innerHTML=''

    lib.getBook().forEach((book, index)=>{
        renderLibEl.innerHTML += 
        `
        <li class="book-list">
        <div style="text-decoration: ${book.isRead() ? 'line-through' : 'none'}">${book.getTitle()} by ${book.getAuthor()}</div>
        <div class="button-container">
            
            <button 
                style="background-color: rgb(22 163 74);" 
                onclick="markBookAsRead(${index})">
                Mark as Read
            </button>
        
            <button style="background-color: rgb(220 38 38);" onclick="removeBook(${index})">Remove</button>
        </div>
    </li>
    
        `
    })
    
}