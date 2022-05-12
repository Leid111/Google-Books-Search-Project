import createResultsElement from "./dom-utils.js";

const urlBase = `https://www.googleapis.com/books/v1/volumes?q=`;

const getSearchUrl = (searchTerm) => {
    //clean URL to mak sure its a valid url;
    return urlBase + searchTerm;
};

const search = async (searchTerm) => {
    const requestPromise = fetch(getSearchUrl(searchTerm));
    const response = await requestPromise;
    const searchObject = await response.json();

    const searchResultTemplate = searchObject.items.map((book) => {
        const bookInfo = {};
        try {
            if (book.volumeInfo.authors[0])
                bookInfo.Author = book.volumeInfo.authors[0];
            else bookInfo.Author = "Unkown";
        } catch (error) {
            bookInfo.Author = "Unkown";
        }
        try {
            if (book.volumeInfo.title) bookInfo.Title = book.volumeInfo.title;
            else bookInfo.Title = "Unkown";
        } catch (error) {
            bookInfo.Title = "Unkown";
        }

        try {
            if (book.volumeInfo.description)
                bookInfo.Description = book.volumeInfo.description;
            else bookInfo.Description = "Unkown";
        } catch (error) {
            bookInfo.Description = "Unkown";
        }

        try {
            if (book.volumeInfo.imageLinks.smallThumbnail)
                bookInfo.Image = book.volumeInfo.imageLinks.smallThumbnail;
            else bookInfo.Image = "unknown";
        } catch (error) {
            bookInfo.Image = "unknown";
        }

        return bookInfo;
    });
    createResultsElement(searchResultTemplate);
    console.log(searchResultTemplate);
};

buttonSearch.addEventListener("click", (e) => {
    e.preventDefault();
    const searchBarTerm = document.getElementById("searchBarTerm").value;
    search(searchBarTerm);
});
