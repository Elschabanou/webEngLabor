document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from backend
    fetch('/books')
        .then(response => response.json())
        .then(data => {
            // Populate the list with fetched data
            const bookList = document.getElementById('bookList');
            data.forEach(book => {
                const wrapper = document.createElement('div');
                wrapper.classList.add('wrapper');

                const innerWrapper = document.createElement('div');
                innerWrapper.classList.add('inner-wrapper');

                const title = document.createElement('h2');
                title.textContent = `${book.title}`;
                innerWrapper.appendChild(title);

                const iAWrapper = document.createElement('div');
                iAWrapper.classList.add('i_a_wrapper');

                const author = document.createElement('h3');
                author.textContent = `${book.author}`;
                iAWrapper.appendChild(author);

                const isbn = document.createElement('p');
                isbn.textContent = `${book.isbn}`;
                iAWrapper.appendChild(isbn);

                innerWrapper.appendChild(iAWrapper);

                const cont = document.createElement('p');
                cont.textContent = `${book.content}`;

                wrapper.appendChild(innerWrapper);
                wrapper.appendChild(cont);


                bookList.appendChild(wrapper);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
